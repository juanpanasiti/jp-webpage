import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from '../components/common/Navigation';
import { Home, Projects } from '../pages';

export const MainRouter = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/blog">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
