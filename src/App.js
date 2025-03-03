import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Users from './pages/Users'
import NewPlace from './pages/NewPlace'
import MainNavigation from './components/shared/Navigation/MainNavigation'

function App() {
    return (
        
        <Router>
            <MainNavigation />
        <main>
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace />
                </Route>
                <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    )
}

export default App;
