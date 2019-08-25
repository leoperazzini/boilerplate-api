import { Router, Request, Response, NextFunction } from "express";
import checkValidators from "./app/middlewares/validator-checker";
import {
  createUser,
  updateUserValidator,
  searchUserValidator
} from "./app/validators/user.validator";

// Controllers
import usersController from "./app/controllers/user.controller";

const routes = Router();

/**
 * Application routes
 */

// users
routes.post(
  "/users",
  createUser,
  checkValidators,
  (req: Request, res: Response, next: NextFunction) => {
    next();
  },
  usersController.create
);

routes.patch(
  "/users/:id(\\d+)",
  updateUserValidator,
  checkValidators,
  usersController.update
);

routes.get(
  `/users`,
  searchUserValidator,
  checkValidators,
  usersController.index
);

routes.post(
  `/users/search`,
  searchUserValidator,
  checkValidators,
  usersController.index
);

routes.get(`/users/:id(\\d+)`, usersController.find);

routes.delete(`/users/:id(\\d+)`, usersController.delete);

export default routes;
