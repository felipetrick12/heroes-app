import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";


import LoginScreen from '../components/login/LoginScreen';

import DashboardRoute from './DashboardRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../auth/AuthContext';


export default function AppRouter() {

  const { user } = useContext(AuthContext);
    return (
        <Router>
      <div>
        <Switch>
                <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={ user.logged }/>
                <PrivateRoute path="/" component={DashboardRoute} isAuthenticated={ user.logged }/>
        </Switch>
      </div>
    </Router>
    )
}
