import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import Home from '../Home/Home';

const App = () => {
    return (
        <Router>
            <Route component={Home} />
        </Router>
    );
};

export default App;