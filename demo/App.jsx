/* eslint-disable  */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Layout from './Layout';

import HomePage from './HomePage';
import FormPage from './FormPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:lng">
          <Layout>
            <Route path="/:lng/form" exact component={FormPage} />
            <Route path="/:lng" exact component={HomePage} />
          </Layout>
        </Route>
        <Route path="/" exact render={() => <Redirect to="/en" />} />
      </Switch>
    );
  }
}

export default App;
