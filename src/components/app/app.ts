import Route from '../route/route';
import Router from '../route/router';
import { IApp, IRouter } from '../types/interfaces';

class App implements IApp {
  public router: IRouter;

  constructor() {
    this.router = new Router([
      new Route('catalog', 'catalog.html', true),
      new Route('cart', 'cart.html'),
      new Route('404', '404.html'),
    ]);
  }

  start(): void {
    this.router.initRoutes();
    this.router.startRouter();
    console.log('Промокоды: FIRELINK, DOGDOG, PALISADE, PIRANHA');
    console.log('В блоке ввода срока действия карты косая черта появляется при нажатии enter');
  }
}

export default App;
