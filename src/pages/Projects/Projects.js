import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {

    render() {
        let sDisplayMessage = "This is the Projects Page";

        return (
            <div className="projects">
                {sDisplayMessage}
            </div>
        );
    }
}

export default Projects;