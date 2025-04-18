import { HomeRouter, UserAuthRouter } from "../routers";

import type { Routes } from "../typings";

export const routes: Routes[] = [new HomeRouter(), new UserAuthRouter()];
