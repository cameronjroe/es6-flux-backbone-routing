/**
 * App Store
 */
import Backbone from 'backbone';
import AppDispatcher from '../dispatcher/appDispatcher';
import RouteDispatcher from '../dispatcher/routeDispatcher';

let AppStore = Backbone.Model.extend({

  defaults: {
    page: 'home'
  },

  initialize() {
    this.dispatchId = RouteDispatcher.register((payload) => this.handleDispatch(payload));
  },

  handleDispatch(payload) {
    this.set({page: payload.page});
  },

  getAppState() {
    return this.toJSON();
  }

});

export default new AppStore();