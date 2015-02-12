/**
 * App
 */
import React from 'react';
// stores
import AppStore from '../stores/appStore';
import RouterStore from '../stores/routerStore';
// components
import NavComponent from './nav';
import PageComponent from './page';

let AppComponent = React.createClass({

  getInitialState() {
    return {
      routeState: RouterStore.getRouterState(),
      appState: AppStore.getAppState()
    }
  },

  componentDidMount() {
    AppStore.on('change', this.onChange);
    RouterStore.on('change', this.routeChange);
  },

  componentWillUnmount() {
    AppStore.off('change', this.onChange);
    RouterStore.off('change', this.routeChange);
  },

  onChange() {
    this.setState({
      appState: AppStore.getAppState()
    });
  },

  routeChange() {
    this.setState({
      routeState: RouterStore.getRouterState()
    })
  },

  render() {
    return (
        <div className='container' style={{paddingTop: '100px'}}>
          <NavComponent />
          <PageComponent page={this.state.appState.page}/>
        </div>
      );
  }
});

export default AppComponent;