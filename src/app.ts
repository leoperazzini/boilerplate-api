import express from "express";
import cors from "cors";
import database from "./config/database";
import routes from "./routes";
import dotenv from "dotenv";
import camelize from "./app/middlewares/param-camelizer";
import * as sentry from "@sentry/node";
import colors from "./utils/console-colors";

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});


class Application {

  public express: any;

  constructor() {
    this.express = express();
    this.startSentry();
    this.globalMiddlewares();
    this.routes();
    this.database();
  }

  startSentry() {
    if(process.env.NODE_ENV !== 'test') {
      sentry.init({ dsn: process.env.SENTRY_DSN });
      console.log(`${colors.fgMagenta}[Sentry]: ${colors.reset}Starting sentry for DSN: ${process.env.SENTRY_DSN || 'N/A'}`)
    }    
  }

  globalMiddlewares() {
    this.express.use([ sentry.Handlers.errorHandler(), express.json({ limit: '50mb'}), cors(), camelize ]);
  }

  routes() {
    this.express.use(routes);
  }

  database() {
    if (process.env.NODE_ENV !== 'test') {
      database.sync().then(
        () => console.log(`${colors.fgGreen}[INFO]: ${colors.reset}Database connected!`),
        (err: any) => console.error(`${colors.fgRed}[ERROR]: ${colors.reset}Could not connect to the database: ${JSON.stringify(err)}`));
    }
  }

}

export default new Application().express;