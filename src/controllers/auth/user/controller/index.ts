import type { Request, Response } from "express";
import { registerUser } from "../../../../middleware/helper/(auth)";

export class UserAuthController {
  protected request: Request;
  protected response: Response;
  constructor(req: Request, res: Response) {
    this.request = req;
    this.response = res;
  }
  private async handleRegister() {
    try {
      const result = await registerUser(this.request.body);
      return this.response.status(201).json({
        message: "User registered successfully.",
        ...result,
      });
    } catch (error: any) {
      console.error("[User Register Error]", error.message);
      const status = error.message === "User already exists." ? 409 : 400;
      return this.response.status(status).json({ error: error.message });
    }
  }
  use = async (): Promise<any | void> => await this.initialize();

  initialize = async () => {
    const { action } = this.request.body;

    switch (action) {
      case "register":
        return await this.handleRegister();
      default:
        return this.response.status(400).json({ error: "Invalid action." });
    }
  };
}
