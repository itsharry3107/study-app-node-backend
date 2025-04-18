import { Express as ExpressApp } from "express";
import type { App, Routes } from "../../typings";
import { config } from "../../config";
import { mapAndRegisterRouters } from "../../utils/mapRouters";
import { routes } from "../../conf/routes";
import { connectDB } from "../../core";

export default class Express implements App {
  protected app?: ExpressApp;
  port?: number | 3000;
  constructor(application: ExpressApp) {
    this.app = application;
    this.listen = this.listen.bind(this);
    this.port = config?.port;
    this.registerRoutes(routes);
  }
  registerRoutes: (routes: Routes[]) => void | any = (routes: Routes[]) =>
    mapAndRegisterRouters(routes, (route: Routes) =>
      this.app?.use(route.path, route.router)
    );
  connect: (callback?: () => void | any) => void = (
    callback?: () => void | any
  ) => {
    connectDB({ callback });
  };
  listen: (port?: number, callback?: (port: number) => void) => void = (
    port?: number,
    callback?: (port: number) => any | void
  ) => {
    let serverPort: number | undefined;
    serverPort =
      typeof port === "undefined" || port === null
        ? this.port
        : typeof port === "number" && port === 0
        ? this.port
        : port;
    this.app?.listen(serverPort, callback!(serverPort as number));
  };
}
