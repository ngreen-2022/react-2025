import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Users from './pages/Users'
import NewPlace from './pages/NewPlace'

function App() {
    return (
        
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default App;
