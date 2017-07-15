import React, { Component } from 'react';
import './About.css';

class About extends Component {

    render() {
        let sDisplayMessage = "This is the About Page";

        return (
            <div className="About">
                {sDisplayMessage}
            </div>
        );
    }
}

export default About;