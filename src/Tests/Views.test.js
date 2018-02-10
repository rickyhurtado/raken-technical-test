import React from 'react';
import ReactDOM from 'react-dom';
import Views from '../Views';

it('Dashboard view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Company view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Company />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Projects view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Projects />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Team view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Team />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Help view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Help />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Page Not Found view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.PageNotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Account > My Profile view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Account.MyProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Account > My Projects view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Account.MyProjects />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Account > Notifications view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Account.MyProjects />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Account > Tasks view component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Views.Account.MyProjects />, div);
  ReactDOM.unmountComponentAtNode(div);
});
