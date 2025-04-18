import { HomeRouter, UserAuthRouter } from "../routers";
import type { Routes } from "../typings";

export const routes: Routes[] = [
  {
    path: "/",
    router: new HomeRouter().router,
  },
  {
    path: "/auth/user",
    router: new UserAuthRouter().router,
  },
];
