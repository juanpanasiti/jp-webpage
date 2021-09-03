import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


import { Footer } from '../components/common/Footer';
import { Navigation } from '../components/common/Navigation';
import { Home, Projects } from '../pages';
import { Contact } from '../pages/Contact';
import { setInitialLang } from '../redux/actions/langActions';

export const MainRouter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setInitialLang())
        // eslint-disable-next-line
    }, [])
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/blog">
                        <Redirect to='/' />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};
