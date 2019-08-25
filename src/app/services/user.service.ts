import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import moment from "moment";
import util from "util";

import User, { UserInterface } from "../models/User";

export class UserService {
  async find(id: number) {
    try {
      return await User.findByPk(id);
    } catch (e) {
      throw e;
    }
  }

  async index(params: any) {
    try {
      let filters: any = {};

      if (params.hasOwnProperty("active")) filters.active = params.active;

      if (params.hasOwnProperty("id")) filters.id = params.id;

      if (params.hasOwnProperty("name"))
        filters.name = {
          [Op.like]: "%" + params.name + "%"
        };

      if (params.hasOwnProperty("username"))
        filters.username = {
          [Op.like]: "%" + params.username + "%"
        };

      return await User.findAll({
        where: filters,
        order: [["id", "ASC"]],
        offset: 0,
        limit: 1000
      });
    } catch (e) {
      throw e;
    }
  }

  async create(data: UserInterface) {
    try {
      return await User.create({
        ...data
      });
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, data: User /* report?: number */) {
    try {
      let updated = await User.update(data, {
        where: {
          id
        }
      });

      if (updated) return true;
      else return false;
    } catch (e) {
      throw e;
    }
  }

  async delete(id: number) {
    try {
      let deleted = await User.destroy({
        where: {
          id
        }
      });

      if (deleted == 1) return true;
      else return false;
    } catch (e) {
      throw e;
    }
  }
}
