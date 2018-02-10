import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Layout from '../../Components/Layout';
import Header from  '../../Components/Layout/Basic/Header';

it('Layout.Basic component should render', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Route>
        <Layout.Basic>
          <p>Test</p>
        </Layout.Basic>
      </Route>
    </BrowserRouter>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('Header component should render', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Route>
        <Header />
      </Route>
    </BrowserRouter>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
