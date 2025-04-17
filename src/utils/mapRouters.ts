import type { Routes } from "../typings";

export function mapAndRegisterRouters(
  routers: Routes[],
  callback: (router: Routes) => void | any
) {
  return routers.forEach((router: Routes) => callback(router));
}
