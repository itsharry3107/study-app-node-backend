import type { Request, Response } from "express";

export class HomeController {
  protected request: Request;
  protected response: Response;
  constructor(req: Request, res: Response) {
    this.request = req;
    this.response = res;
  }

  use = async (): Promise<any | void> => {
    return this.response.send({
      message: "Welcome to the API",
      status: 200,
      data: null,
    });
  };
}
