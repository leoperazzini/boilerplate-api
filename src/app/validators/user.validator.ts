import { check } from "express-validator";

export const createUser = [
  check(["username", "name"]).isString(),
  check("active").isBoolean()
];

export const updateUserValidator = [
  check(["username", "name"])
    .optional()
    .isString(),
  check("active")
    .optional()
    .isBoolean()
];

export const searchUserValidator = [
  check(["username", "name"])
    .optional()
    .isString(),
  check("active")
    .optional()
    .isBoolean()
];
