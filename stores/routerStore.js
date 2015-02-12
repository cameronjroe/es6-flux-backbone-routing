/**
 * Router Store
 */
import Backbone from 'backbone';
import RouteDispatcher from '../dispatcher/routeDispatcher';

/**
 * Actions
 */
const ROUTE_CHANGE = 'ROUTE_CHANGE';

/**
 * Router
 */
let Router = Backbone.Router.extend({

  initialize(routes) {
    this.createRoutes(routes);

    Backbone.history.start({pushState: true, root: '/'});
  },

  createRoutes(routes) {
    for(var route in routes) {
      if (routes.hasOwnProperty(route)) {
        this.route(route, routes[route]);
      }
    }
  }

});

/**
 * Store
 */
let RouteStore = Backbone.Model.extend({

  defaults: {
    'home': 'home'
  },

  initialize(routes) {
    this._router = new Router(routes);
    this.dispatchId = RouteDispatcher.register((payload) => this.handleDispatch(payload));

    this._router.on('route', () => this.updateState);
    this._router.navigate(this.defaults.home, {trigger: false});
  },

  handleDispatch(payload) {
    this._router.navigate(payload.route, {trigger: true});
  },

  updateState(route) {
    console.log(route);
    this.set({route: route});
  },

  getRouterState() {
    return this.toJSON();
  }

});

let RouterStore = new RouteStore({'home': 'home', 'detail': 'detail'});

export default RouterStore;
