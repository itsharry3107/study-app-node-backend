import { Router } from "express";

export interface App {
  listen: (port: number, callback?: () => void) => void;
  port?: number | 3000;

  registerRoutes: (routes: Routes[]) => void;
}

export interface Routes {
  path: string;
  router: Router;
}
