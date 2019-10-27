import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

//import component pages
import { Home, FormPage } from './pages';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/form" component={FormPage} />
            </div>
        </Router>
    );
};

export default App;
