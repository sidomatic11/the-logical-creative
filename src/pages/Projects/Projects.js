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
import PingTileImage from './../../images/ping_tile.png';


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


import ImageProspectus1 from './../../images/about-us.jpg';
import ImageProspectus2 from './../../images/academic-programs.jpg';
import ImageProspectus3 from './../../images/professional-society-activities.jpg';
import ImageProspectus4 from './../../images/prospectus-print.jpg';

import ImageCredenzLogo1 from './../../images/cred_1.jpg';
import ImageCredenzLogo2 from './../../images/cred_2.jpg';
import ImageCredenzLogo3 from './../../images/cred_3.jpg';
import ImageCredenzComingSoon from './../../images/cred_coming_soon.jpg';
import ImageCredenzMainPoster from './../../images/cred_main_poster.jpg';
import ImageCredenzPixWeb from './../../images/cred_pixweb.jpg';
import ImageCredenzOnlineEvents from './../../images/cred_online.jpg';

import Ping100Front from './../../images/ping_10.0_front.jpg';
import Ping100Back from './../../images/ping_10.0_back.jpg';
import Ping100CallForArticles from './../../images/ping_10.0_call_for_articles.jpg';
import Ping101Front from './../../images/ping_10.1_front.jpg';
import Ping101Back from './../../images/ping_10.1_back.jpg';
import Ping101Badge from './../../images/ping_10.1_badge.png';

import ProcessDiagramIeeeConnect from './../../images/process-diagram-ieee-connect.png';
import MockupsDisplayIeeeConnect from './../../images/mockups-display-ieee-connect.png';
import IeeeHierarchy from './../../images/ieee-hierarchy.svg';


const aProjectData = [
    {
        id: "ieeeconnect",
        name: "IEEE Connect - App Design",
        image: IEEEConnectTileImage
    },
    {
        id: "pictprospectus",
        name: "PICT Prospectus Design",
        image: ProspectusTileImage
    },
    /*{
        id: "credenz14",
        name: "Credenz'14 Designs",
        image: CredenzTileImage
    }, */
    {
        id: "ping",
        name: "P.I.N.G.",
        image: PingTileImage
    },
    {
        id: "30daysofart",
        name: "30 Days of Art",
        image: ArtTileImage
    }
];

const BackButton = () => (
    <Link to="/projects" onClick={() => { window.scrollTo(0, 0); }}>
        <div className="backButton">back</div>
    </Link>
);

const IEEEConnect = () => (
    //todo: use componentdidmount to get dimensions.
    <div className="projectPage container">

        <div>

            <br/>

            <h1>IEEE Connect</h1>
            <p> An app that enhances collaboration between IEEE Student members and keeps them updated with the latest happenings. </p>

            <br />

            <div className="row">

                <div className="col-sm-6 col-md-4">
                    <h5>Role</h5>
                    <p>Ideation, Wireframing, Presentation</p>
                </div>

                <div className="col-sm-6 col-md-4">
                    <h5>Collaborator</h5>
                    <p>Akshay Bhole</p>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="alert alert-info">
                        <p><b>First Prize</b> at the IEEE Region 10 Mobile Application Design Contest</p>
                    </div>
                </div>

            </div>

            <hr />

            <h5> Problem Statement </h5>

            <p>
                Design a mobile application that would facilitate easy,
                approachable and unhindered communication among student members across branches, sections
                and regions.
                It is intended to provide a platform to the student members for interaction and
                collaboration on a wide range of subjects and enhance the reach of information regarding the
                activities and events being organized for the benefit of student members.
                The utility of the application can be kept for a Student Branch / Section / Council / Region.
            </p>

            <hr />

            <h5>The Process</h5>
            <div className="process-image-container">
                <img style={{ width: "100%" }} src={ProcessDiagramIeeeConnect} />
            </div>
            <div className="row">
                <p className="col-sm-12 col-md-4">
                    1 - We gathered detailed information about the hierarchy of IEEE organisation.
                We ourselves were the end users i.e. the student members. We interviewed our fellow student members for identifying problem areas.
            </p>
                <p className="col-sm-12 col-md-3">
                    2 - On getting a fair idea of what we want the application to do, we designed the system considering all the actors and the different use cases.
            </p>
                <p className="col-sm-12 col-md-3">
                    3 - We planned the screens according to the designed system and prepared the low fidelity wireframes on paper.
            </p>
                <p className="col-sm-12 col-md-2">
                    4 - After the final wireframes were ready, we prepared the high fidelity mock ups which was the expected end result for the competition.
             </p>
            </div>

            <h5> Our Solution </h5>

            <div>
                <img style={{ width: "100%" }} src={MockupsDisplayIeeeConnect} />
            </div>

            <br />

            <h6>Scope</h6>
            <p>The scope of this application is scalable. It can be implemented for the following levels :
	Section, Region or International. Restrictions can be imposed based on the requirements and feasibility.</p>

        
             <br />
            {/* <h6>Structure</h6>
            <div className="row">
                <img className="col-sm-12 col-md-6 img-fluid" src={IeeeHierarchy}/>
            </div> */}

            <h6>Networking</h6>
            <p>
                <b>Discussion boards</b> will facilitate communication between members at various levels. <br/>
                 <i>Official boards</i> - they can be used for collaboration amongst members
                at the respective levels. There can also be other official boards to address issues faced by
                members and providing them with required guidance and help. <br/>
                 <i>Unofficial boards</i> - any member can freely start a
                discussion and interested members can join in. These boards can be used for discussion of new
                ideas. <br/>
                 <b>Member profiles</b> will consist of details like the member’s general
                information, designation, skills, achievements and volunteering experience. Using this information,
                 others can have a clear idea about whom to contact for any particular assistance. <br/>
                 <b>Polls</b> can be used for validation of ideas and
                taking important decisions.
            </p>

            <br />
            

            <h6>Volunteer Resources</h6>
            <p>
            An event can be created by the event coordinator and its scope for volunteering can be
            specified by the coordinator. The event page will consist of the various tasks for which members
            can volunteer. The coordinator can issue a call for volunteering which will be conveyed to the
            members via notifications. The member can choose to accept the invitation and can volunteer for a
            particular task. On successful completion of the task, it will be added to the member’s profile.
            </p>

            <br />

            <h6>Official Information</h6>
            <p>
            The moderators of a specific branch/section/region can send information to their members
via notifications. The app will consist of a news feed section from where the members will get
information about various events, activities and happenings at all levels. The official IEEE
deadlines will be available for the members to view and will be timely notified to them through the
notifications.
            </p>

            <br />

            <h6>Additional Information</h6>
            <p>
            The app will consist of an IEEE Calendar. This calendar will consist of the official IEEE
deadlines as mentioned above. It can contain the dates of local activities related to the member as
well as those added by the members themselves.
            </p> 

            <br />

            <h5>The final presentation</h5>
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vTD-VX2YorHsnygxAwIdh7hIwAQ9i3WOSGQzmZEF-aQQAHiG0fSLkL5fpOZN-7Aw0ioVGfeobIy18fb/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="100%"
                height="400"
                allowFullScreen="true"></iframe>

        </div>

        <BackButton />

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

        <BackButton />

    </div>
);


const ProspectusDesign = () => (
    <div className="projectPage container">

        <div>

            <br/>

            <h1>P.I.C.T. Prospectus</h1>
            <p> The official prospectus of Pune Institute of Computer Technology. </p>

            <br />

            <div className="row">

                <div className="col-sm-6">
                    <h5>Role</h5>
                    <p>Design, Communication with stakeholders, Team management</p>
                </div>

                <div className="col-sm-6">
                    <h5>Collaborators</h5>
                    <p>Akshay Agrawal, Shriya Hardikar, Akriti Goyal</p>
                </div>

            </div>

            <br />

            <h5>Challenges</h5>
            <ul>
                <li>Organise information about all facets of PICT in a few pages</li>
                <li>Collection and capturing of relevant imagery</li>
                <li>Consistent yet variety of layouts</li>
            </ul>

            <br />

            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={ImageProspectus1}/>
                </div>
                <div className="col-md-4">
                    <img  className="img-fluid" src={ImageProspectus2}/>
                </div>
                <div className="col-md-4">
                    <img  className="img-fluid" src={ImageProspectus3}/>
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col-md-12">
                    <img className="img-fluid" src={ImageProspectus4}/>
                </div>
            </div>


        </div>

        <BackButton />

    </div>
);

const Credenz = () => (
    <div className="credenz14page">
        <div className="projectTitle">Credenz '14 </div>
        <div className="projectDescription">Credenz is an annual technical symposium organised by the PICT IEEE Student Branch. Designs for this event range from promotional material, merchandise, UI for website and mobile application and the decoration of the campus.</div>
        <br />
        <br />
        <div className="credenzDescription">
            I was one of the senior designers for Credenz'14 and following are some of the designs that I had made.<br />
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
            <br />
            <br />
            <br />
            The Coming Soon poster :
            <br />
            <br />
        </div>

        <div>
            <img src={ImageCredenzComingSoon} />
        </div>

        <div className="credenzDescription">
            <br />
            <br />
            <br />
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

        <BackButton />

    </div>
);

const PING = () => (
    <div className="pingPage">
        <div className="projectTitle">PICT IEEE Newsletter Group <a target="_blank" href="https://issuu.com/p.i.n.g.">(P.I.N.G.)</a></div>
        <div className="projectDescription">P.I.N.G. is the official biannual newsletter of the PICT IEEE Student Branch. The aim of this newsletter is to provide important technical knowledge regarding latest trends and breakthroughs in technology. A testament to the marvel of technical literature, P.I.N.G. encompasses articles from Industry professionals, acclaimed academicians and students from various fields of study.</div>
        <br />
        <br />
        <div>
            <div className="projectSubTitle">P.I.N.G Issue 10.0</div>
            <div className="projectDescription">Designed the front and back cover of the magazine and a promotional poster.</div>
            <div className="pingImageWrapper">
                <img src={Ping100Front} />
                <img src={Ping100Back} />
                <img src={Ping100CallForArticles} />
            </div>
        </div>
        <br />
        <div>
            <div className="projectSubTitle">P.I.N.G Issue 10.1</div>
            <div className="projectDescription">Responsible for the design of the magazine’s front and back covers, the internal layout and the badge which is awarded to the authors of the articles featured in the magazine.</div>
            <div className="pingImageWrapper">
                <img src={Ping101Front} />
                <img src={Ping101Badge} className="ping-badge"/>
                <img src={Ping101Back} />
            </div>
        </div>

        <BackButton />
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
                <Route path="/projects/ieeeconnect" component={IEEEConnect} />
                <Route path="/projects/pictprospectus" component={ProspectusDesign} />
                <Route path="/projects/credenz14" component={Credenz} />
                <Route path="/projects/ping" component={PING} />
                <Route path="/projects/30daysofart" component={DaysOfArt} />
            </div>
        );
    }
}

export default Projects;