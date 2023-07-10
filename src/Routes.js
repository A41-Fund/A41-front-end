import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/detail/:id" component={DetailSpendingPurposePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
