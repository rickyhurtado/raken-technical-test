import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Components/Routes';
import { watchForHover } from './Lib/Helpers/MobileFixes';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/Style.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);

watchForHover();
registerServiceWorker();
