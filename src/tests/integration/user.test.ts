import app from "../../app";
import request from "supertest";
import moment from "moment";
import sequelize from "../../config/database";
import { NextFunction, Response, Request } from "express";

import UserFactory from "../../database/factories/user.factory";
import { UserInterface } from "../../app/models/User";

describe("user create", () => {
  beforeEach(async () => await sequelize.sync({ force: true }));

  it("should create an incident", async () => {
    const { dataValues: userData } = await UserFactory.build("User");

    const response = await request(app)
      .post(`/users`)
      .send(userData);

    const user = response.body;

    expect(response.status).toBe(201);
    expect(user).toMatchObject({
      active: userData.active,
      name: userData.name,
      username: userData.username
    });
  });
});
