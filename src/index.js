import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header';
import Footer from './Footer';
import './index.css'

import Home from './pages/Home/Home';
import Management from './pages/Management/Management';
import MediaCenter from './pages/MediaCenter/MediaCenter';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Jobs from './pages/Jobs/Jobs';
import Profile from './pages/Profile/Profile';

render((
  <BrowserRouter>
    <div>
      <Header/>
      <hr/>
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/management" component={Management} />
        <Route path="/media_center" component={MediaCenter} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/profile/:user" component={Profile} />
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
