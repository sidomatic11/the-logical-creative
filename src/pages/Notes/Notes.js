import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {

    render() {
        let sDisplayMessage = "coming soon";

        return (
            <div className="notesPage">
                <div className="notesPageMessage">{sDisplayMessage}</div>
            </div>
        );
    }
}

export default Notes;