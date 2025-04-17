import { Router } from "express";
import { config } from "../../config";
import { initializeControllers } from "../../utils/initializeControllers";
import { StreamController } from "../../controllers/index";

export class StreamingRouter {
  public router: Router;
  public path: string = config.baseUrl;
  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get("/stream/:id", (req, res) =>
      initializeControllers(new StreamController(req, res))
    );
  }
}
