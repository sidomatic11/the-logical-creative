import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Projects from './pages/Projects/Projects';
import Notes from './pages/Notes/Notes';
import About from './pages/About/About';

import {
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {

    let sTitleBarClass = "titleBar ";
    let sProjectsMenuItemClass = "titleMenuItem ";
    let sNotesMenuItemClass = "titleMenuItem ";
    let sAboutMenuItemClass = "titleMenuItem ";

    let sHash = window.location.hash;
    if (sHash.includes("projects")) {
      sProjectsMenuItemClass += "isActive";
    } else if (sHash.includes("notes")) {
      sNotesMenuItemClass += "isActive";
    } else if (sHash.includes("about")) {
      sAboutMenuItemClass += "isActive";
    } else {
      sTitleBarClass += "home";
    }

    return (
      <div className="App">
        <div className="fullSpread">

          <div className={sTitleBarClass}>

            <Link to="/">
              <div className="titleLabel"> The Logical Creative </div>
            </Link>

            <div className="menuItemContainer">
              <Link to="/projects">
                <div className={sProjectsMenuItemClass}> Portfolio </div>
              </Link>
              <Link to="/notes">
                <div className={sNotesMenuItemClass}> Notes </div>
              </Link>
              <Link to="/about">
                <div className={sAboutMenuItemClass}> About </div>
              </Link>
            </div>

            <div className="dividerBar"></div>
            
          </div>
          
          <Route path="/projects" component={Projects} />
          <Route path="/notes" component={Notes} />
          <Route path="/about" component={About} />

        </div>
      </div>
    );
  }
}

export default App;
