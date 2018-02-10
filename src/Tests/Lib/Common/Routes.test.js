import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ViewRoute } from '../../../Lib/Common/Routes';

it('ViewRoute component', () => {
  const component = renderer.create(
    <BrowserRouter>
      <ViewRoute exact path='/' component={() => <Redirect to='/test-page' />} />
    </BrowserRouter>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
