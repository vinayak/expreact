import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Management from './pages/Management/Management';
// import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';


render((
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/management" component={Management} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
