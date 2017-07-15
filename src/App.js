import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import MenuContainer from './MenuContainer';
import {
  Route,
  Link 
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Link to="/">
              <Title />
            </Link>
            {/*<Route exact path="/" component={MenuContainer} />*/}
            {/*<MenuContainer/>*/}
            {/*{this.props.children}*/}
          </div>
      </div>
    );
  }
}

export default App;
