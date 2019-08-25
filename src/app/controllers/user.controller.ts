import { Request, Response } from "express";
import { UserService } from "../services/user.service";

class IncidentController {
  async create(req: Request, res: Response) {
    try {
      const incident = await new UserService().create(
        req.body /* {
        tasks: req.body.tasks
      } */
      );

      return res.status(incident ? 201 : 500).send(incident);
    } catch (e) {
      return res.status(500).send(e);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const result = await new UserService().index(
        Object.keys(req.body).length ? req.body : req.query
      );
      return res.send(result);
    } catch (e) {
      return res.status(500).send(e);
    }
  }

  async find(req: Request, res: Response) {
    try {
      const result = await new UserService().find(req.params.id);
      return res.status(result ? 200 : 404).send(result);
    } catch (e) {
      return res.status(500).send(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const result = await new UserService().update(req.params.id, req.body);
      return res.status(result ? 200 : 404).send(result);
    } catch (e) {
      return res.status(500).send(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const result = await new UserService().delete(req.params.id);

      res.status(result ? 200 : 404).send(result);
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  }
}

export default new IncidentController();
