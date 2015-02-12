/**
 * App Actions
 */
import AppDispatcher from '../dispatcher/appDispatcher';
import RouteDispatcher from '../dispatcher/routeDispatcher';

let AppActions = {

  /**
   * Dispatch Route
   */
  dispatchRoute(route) {
    RouteDispatcher.dispatch({
      actionType: 'ROUTE_CHANGE',
      route: route,
      page: route
    });
  }

};

export default AppActions;