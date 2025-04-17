import { Router } from "express";
// import { config } from "../../config";
import { initializeControllers } from "../../utils/initializeControllers";
import { HomeController } from "../../controllers/index";

export class HomeRouter {
  public router: Router;
  public path: string = "/";
  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get("/", (req, res) =>
      initializeControllers(new HomeController(req, res))
    );
  }
}
