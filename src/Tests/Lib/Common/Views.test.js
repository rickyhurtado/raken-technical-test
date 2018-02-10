import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { PageTitle, NavLink } from '../../../Lib/Common/Views';

it('PageTitle component should render', () => {
  const component = renderer.create(
    <PageTitle title="Page Title" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('PageTitle component should render with parent page title', () => {
  const component = renderer.create(
    <PageTitle title="Page Title" appName="Parent Page Title" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('PageTitle component should render with customTitle prop', () => {
  const component = renderer.create(
    <PageTitle title="Page Title" customTitle />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('NavLink component should render without "active" class and notification badge', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Route>
        <NavLink title="Test Page" to="/test-page" path="/current-page" />
      </Route>
    </BrowserRouter>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('NavLink component should render with "active" class', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Route>
        <NavLink title="Current Page" to="/current-page" path="/current-page" />
      </Route>
    </BrowserRouter>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('NavLink component should render with notification badge', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Route>
        <NavLink title="Current Page" to="/current-page" path="/current-page" count="7" />
      </Route>
    </BrowserRouter>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
