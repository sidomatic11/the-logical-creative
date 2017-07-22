import React from 'react';
import { 
  HashRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';


// this is the default behavior
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

const Routes = () => (
    <Router getUserConfirmation={getConfirmation}>
        <div className="appWrapper">
            <Route path="/" component={App} />
        </div>
    </Router>
);

export default Routes;