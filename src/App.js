
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoardLayout from './components/dashBoardLayout'
import Home from './screens/home/Home';
import Recruitment from './screens/recruitment/Recruitment';
import Login from './screens/login/Login';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <DashBoardLayout>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/recruitment" render={(props) => <Recruitment {...props} />} />
          </DashBoardLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
