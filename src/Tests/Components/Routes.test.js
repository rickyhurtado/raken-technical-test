import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../../Components/Routes';

it('Routes component should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
