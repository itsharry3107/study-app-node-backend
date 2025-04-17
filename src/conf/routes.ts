import { HomeRouter, StreamingRouter } from "../routers";

import type { Routes } from "../typings";

export const routes: Routes[] = [new HomeRouter(), new StreamingRouter()];
