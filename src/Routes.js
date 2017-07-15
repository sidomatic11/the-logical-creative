import React from 'react';
import { 
  HashRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import MenuContainer from './MenuContainer';
import Projects from './pages/Projects/Projects';
import Notes from './pages/Notes/Notes';
import About from './pages/About/About';

const Routes = () => (
    <Router>
        <div className="appWrapper">
            <Route path="/" component={App} />
            <Route exact path="/" component={MenuContainer} />
            <Route path="/projects" component={Projects} />
            <Route path="/notes" component={Notes} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);

export default Routes;