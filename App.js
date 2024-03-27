import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AllProductsPage from './AllProductsPage';
import SpecificProductPage from './SpecificProductPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AllProductsPage} />
                <Route path="/specific-product" component={SpecificProductPage} />
            </Switch>
        </Router>
    );
};

export default App;
