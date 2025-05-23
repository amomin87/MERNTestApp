import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import List from './components/List';
import Delete from './components/Delete';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route path="/list" component={List} />
                    <Route path="/delete/:id" component={Delete} />
                    <Route path="/" exact>
                        <h1>Welcome to the MERN Docker App</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;