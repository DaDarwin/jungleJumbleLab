import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { jumbleController } from "./controllers/jumbleController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [jumbleController],
    view: 'app/views/jumbleView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])