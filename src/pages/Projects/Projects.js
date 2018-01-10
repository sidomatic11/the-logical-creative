import React, { Component } from 'react';
import './Projects.css';
import {
    Route,
    Link
} from 'react-router-dom';


import ArtTileImage from './../../images/art_tile.png';
import ProspectusTileImage from './../../images/prospectus_thumb.png';
import IEEEConnectTileImage from './../../images/ieee_connect_tile.png';
import CredenzTileImage from './../../images/credenz_tile.png';


import ImageDay1 from './../../images/day_1.jpg';
import ImageDay2 from './../../images/day_2.jpg';
import ImageDay3 from './../../images/day_3.jpg';
import ImageDay4 from './../../images/day_4.jpg';
import ImageDay5 from './../../images/day_5.jpg';
import ImageDay6 from './../../images/day_6.jpg';
import ImageDay7 from './../../images/day_7.jpg';
import ImageDay8 from './../../images/day_8.jpg';
import ImageDay9 from './../../images/day_9.jpg';
import ImageDay10 from './../../images/day_10.jpg';
import ImageDay11 from './../../images/day_11.jpg';
import ImageDay12 from './../../images/day_12.jpg';
import ImageDay13 from './../../images/day_13.jpg';
import ImageDay14 from './../../images/day_14.jpg';
import ImageDay15 from './../../images/day_15.jpg';
import ImageDay16 from './../../images/day_16.jpg';
import ImageDay17and18 from './../../images/day_17_day_18.jpg';
import ImageDay19 from './../../images/day_19.jpg';
import ImageDay20 from './../../images/day_20.jpg';
import ImageDay21 from './../../images/day_21.jpg';
import ImageDay22 from './../../images/day_22.jpg';
import ImageDay23 from './../../images/day_23.jpg';
import ImageDay24 from './../../images/day_24.jpg';
import ImageDay25 from './../../images/day_25.jpg';
import ImageDay26 from './../../images/day_26.jpg';
import ImageDay27 from './../../images/day_27.jpg';
import ImageDay28 from './../../images/day_28.jpg';
import ImageDay29 from './../../images/day_29.jpg';
import ImageDay30 from './../../images/day_30.jpg';


import ImageApp1 from './../../images/app_1.png';
import ImageApp2 from './../../images/app_2.png';
import ImageApp3 from './../../images/app_3.png';


import ImageProspectus1 from './../../images/prospectus_1.png';
import ImageProspectus2 from './../../images/prospectus_2.png';
import ImageProspectus3 from './../../images/prospectus_3.png';
import ImageProspectus4 from './../../images/prospectus_4.png';

import ImageCredenzLogo1 from './../../images/cred_1.jpg';
import ImageCredenzLogo2 from './../../images/cred_2.jpg';
import ImageCredenzLogo3 from './../../images/cred_3.jpg';
import ImageCredenzComingSoon from './../../images/cred_coming_soon.jpg';
import ImageCredenzMainPoster from './../../images/cred_main_poster.jpg';
import ImageCredenzPixWeb from './../../images/cred_pixweb.jpg';
import ImageCredenzOnlineEvents from './../../images/cred_online.jpg';


const aProjectData = [
    {
        id: "30daysofart",
        name: "30 Days of Art",
        image: ArtTileImage
    },
    {
        id: "pictprospectus",
        name: "PICT Prospectus Design",
        image: ProspectusTileImage
    },
    {
        id: "ieeeconnect",
        name: "IEEE Connect - App Design",
        image: IEEEConnectTileImage
    },
    {
        id: "credenz14",
        name: "Credenz'14 Designs",
        image: CredenzTileImage
    }/* ,
    {
        id: "ping",
        name: "P.I.N.G.",
        image: null
    } */
];

const BackButton = () => (
    <Link to="/projects" onClick={ () => {window.scrollTo(0, 0);} }>
        <div className="backButton">back</div>
    </Link>
);

const IEEEConnect = () => (
    //todo: use componentdidmount to get dimensions.
    <div className="ieeeConnectPage">

        <div className="ieeeConnectDescription">
            IEEE Connect was my team's entry for a Mobile Application Design Competition organised by IEEE Region 10 (Asia and Pacific) in October 2015.
            The mobile application was intended to provide a platform for student members to interact, exchange ideas and collaborate in a number of activities being planned and executed for the benefit of student members. <br />
            There was an ideation phase in which we were supposed to submit our idea of how the application would be. After clearing this round, there was the wireframe development round. <br />
            <br />
            Our design secured the first prize in the competition.<br />
            <br />
            Below images show the high fidelity wireframe that we created for our design of the application :
        </div>

        <div className="appImagesContainer">
            <img src={ImageApp1} />
            <img src={ImageApp2} />
            <img src={ImageApp3} />
        </div>

        <div className="ieeeConnectDescription bottomMargin">
            We had to present our wireframe in front of the judges and explain the design of the application. Following is the presentation that we made for the same :
            <br />
        </div>

        <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTD-VX2YorHsnygxAwIdh7hIwAQ9i3WOSGQzmZEF-aQQAHiG0fSLkL5fpOZN-7Aw0ioVGfeobIy18fb/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="100%"
            height="400"
            allowFullScreen="true"></iframe>

            <BackButton/>
    </div>
);


const DaysOfArt = () => (
    <div className="daysOfArt">

        <div className="pageHeader">
            30 Days of Art
        </div>

        <div className="daysOfArtDescription">
            It had been long since I created some artwork. I wanted to get back in touch and learn watercolor painting.
            So, I took upon myself this challenge where I produced a piece of art every day for 30 days.
        </div>

        <div className="dayArtImage">
            <img src={ImageDay1} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay2} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay3} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay4} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay5} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay6} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay7} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay8} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay9} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay10} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay11} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay12} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay13} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay14} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay15} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay16} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay17and18} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay19} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay20} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay21} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay22} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay23} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay24} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay25} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay26} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay27} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay28} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay29} />
        </div>
        <div className="dayArtImage">
            <img src={ImageDay30} />
        </div>

        <BackButton/>

    </div>
);


const ProspectusDesign = () => (
    <div className="prospectusDesignPage">

        <div className="prospectusPageHeader">
            Prospectus Design
        </div>

        <div className="prospectusDescription">
        I along with my team designed the prospectus of Pune Institute of Computer Technology.
        Our goal was to provide an overview of the institute in a more visual way.
        </div>

        <div className="prospectusImagesContainer">
            <img src={ImageProspectus1} alt=""/>
            <img src={ImageProspectus2} alt=""/>
            <img src={ImageProspectus3} alt=""/>
            <img src={ImageProspectus4} alt=""/>
        </div>

        <BackButton/>

    </div>
);

const Credenz = () => (
    <div className="credenz14page">
        <div className="credenzDescription">
            Credenz is the annual technical symposium organised by the PICT IEEE Student Branch.
        I was one of the designers for Credenz'14 and following are some of the designs that I had made.<br />
            <br />
            <br />
            The Credenz'14 logo and its variations : <br />
        </div>

        <div>
            <img src={ImageCredenzLogo1} />
            <img src={ImageCredenzLogo2} />
            <img src={ImageCredenzLogo3} />
        </div>

        <div className="credenzDescription">
            <br/>
            <br/>
            <br/>
            The Coming Soon poster : 
            <br />
            <br />
        </div>

        <div>
            <img src={ImageCredenzComingSoon} />
        </div>

        <div className="credenzDescription">
            <br/>
            <br/>
            <br/>
            The main events poster :
            <br />
            <br />
        </div>

        <div>
            <img src={ImageCredenzMainPoster} />
        </div>

        <div className="credenzDescription">
            <br />
            <br />
            <br />
            Other event specific posters : 
            <br />
            <br />
        </div>

        <div>
            <img src={ImageCredenzPixWeb} />
            <img src={ImageCredenzOnlineEvents} />
        </div>

        <BackButton/>

    </div>
);


class ProjectTile extends Component {

    tileClickHandler() {
        window.scrollTo(0, 0);
    };

    render() {

        let oImage = this.props.image || null;

        return (
            <Link to={"/projects/" + this.props.id}>
                <div className="projectTile" onClick={this.tileClickHandler}>
                    <div className="projectTileImage">
                        <img src={oImage} />
                    </div>
                    <div className="projectTileLabel">{this.props.name}</div>
                </div>
            </Link>
        );
    }
}


class ProjectTileContainer extends Component {

    render() {

        let aProjectTileViews = [];

        for (let oProject of aProjectData) {
            aProjectTileViews.push(
                <ProjectTile key={oProject.id} name={oProject.name} id={oProject.id} image={oProject.image} />
            );
        }

        return (
            <div className="projectTileContainer">
                {aProjectTileViews}
            </div>
        );
    }
}

class Projects extends Component {

    render() {

        return (
            <div className="projectsPage">
                <Route exact path="/projects" component={ProjectTileContainer} />
                <Route path="/projects/30daysofart" component={DaysOfArt} />
                <Route path="/projects/ieeeconnect" component={IEEEConnect} />
                <Route path="/projects/pictprospectus" component={ProspectusDesign} />
                <Route path="/projects/credenz14" component={Credenz} />
            </div>
        );
    }
}

export default Projects;