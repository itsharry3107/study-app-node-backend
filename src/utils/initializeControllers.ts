interface Controller {
  use: () => void | any;
}

export function initializeControllers(controller: Controller) {
  return controller.use();
}
