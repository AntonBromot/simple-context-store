import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './view/pages/Home'
import About from './view/pages/About'
import Navbar from './view/components/Navbar'
import Alert from './view/components/Alert'
import ContextWrapper from './context'

function App() {
  return (
    <ContextWrapper>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
    </ContextWrapper>
  );
}

export default App
