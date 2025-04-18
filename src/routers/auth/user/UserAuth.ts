import { Router } from "express";
import { config } from "../../../config";
import { initializeControllers } from "../../../utils/initializeControllers";
import { UserAuthController } from "../../../controllers/auth";

export class UserAuthRouter {
  public router: Router;
  public path: string = config.baseUrl;
  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post("/auth", (req, res) => {
      initializeControllers(new UserAuthController(req, res));
    });
  }
  
  }

