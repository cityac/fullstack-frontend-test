import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Posts from "./containers/Posts"
import Post from "./containers/Post"

import './App.scss';

function App() {
  let routes = (
    <Switch>
      <Route path="/posts/:id" exact component={Post} />
      <Route path="/posts" exact component={Posts} />
      <Redirect to="/posts" />
    </Switch>
  );
  
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
