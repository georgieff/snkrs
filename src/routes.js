import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SneakersPage from './components/sneakers/SneakersPage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="sneakers" component={SneakersPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
