import React, { Component } from 'react';
import './About.css';
import FloatingMe from "./../../images/floating_me.jpg";

class About extends Component {

    render() {
        let sDisplayMessage = "This is the About Page";

        return (
            <div className="aboutPage">

                <div className="floatingImage">
                    <img src={FloatingMe}/>
                </div>

                <div className="description">
                    <div className="greeting">Hi! I'm Siddhant Patil.</div>
                    <div className="primaryDescription">I am a full time Software Developer and an aspiring UX Designer from Pune, India.</div>
                    A balance of <span className="logical">logical</span> work and <span className="creative">creative</span> pursuits keep me sane, hence <span className="thelogicalcreative">The Logical Creative</span>. 
                </div>

                <div className="socialLinksContainer">
                    <a href="https://www.instagram.com/sidomatic11/"><div>instagram</div></a>
                    <a href="https://www.behance.net/sidomatic11"><div>behance</div></a>
                    <a href="https://www.linkedin.com/in/patilsiddhant/"><div>linkedin</div></a>
                </div>
                
            </div>
        );
    }
}

export default About;