import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Views from '../Views';
import { ViewRoute } from '../Lib/Common/Routes';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <ViewRoute exact path='/' component={() => <Redirect to='/dashboard' />} />
          <ViewRoute exact path='/company' component={Views.Company} />
          <ViewRoute exact path='/dashboard' component={Views.Dashboard} />
          <ViewRoute exact path='/projects' component={Views.Projects} />
          <ViewRoute exact path='/team' component={Views.Team} />
          <ViewRoute exact path='/help' component={Views.Help} />
          <ViewRoute exact path='/account' component={() => <Redirect to='/account/my-profile' />} />
          <ViewRoute exact path='/account/my-profile' component={Views.Account.MyProfile} />
          <ViewRoute exact path='/account/my-projects' component={Views.Account.MyProjects} />
          <ViewRoute exact path='/account/notifications' component={Views.Account.Notifications} />
          <ViewRoute exact path='/account/tasks' component={Views.Account.Tasks} />
          <ViewRoute path='*' component={Views.PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
};
