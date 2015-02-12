/**
 * Nav
 */
import React from 'react';
import AppActions from '../actions/appActions';

let NavComponent = React.createClass({
  
  routes: ['home', 'detail'],

  handleRoute(e) {
    e.preventDefault();
    AppActions.dispatchRoute(e.target.dataset.route);
  },

  render() {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <ul className='nav navbar-nav'>
              {this.routes.map((route) => <li key={route}><a href='#' onClick={this.handleRoute} data-route={route}>{route}</a></li>)}
            </ul>
          </div>
        </nav>
      );
  }
});

export default NavComponent;