/**
 * Page
 */
import React from 'react';
import AppStore from '../stores/appStore';
import RouterStore from '../stores/routerStore';

let PageComponent = React.createClass({

  render() {
    return (
        <div className="jumbotron">
          <h1>{this.props.page}</h1>
          <p>...</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
      );
  }
});

export default PageComponent;