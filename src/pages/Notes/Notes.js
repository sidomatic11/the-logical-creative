import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {

    render() {
        let sDisplayMessage = "This is the Notes Page";

        return (
            <div className="Notes">
                {sDisplayMessage}
            </div>
        );
    }
}

export default Notes;