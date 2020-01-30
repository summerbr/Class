import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Layout from './components/Layout'

ReactDOM.render(
<BrowserRouter>
  <Layout>
    <Switch> //switch between different routes
      <Route exact path= "/" component = {App} />
      <Route path= "/about" component = {About} />
    </Switch>
  </Layout>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
