import React, { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <div className="sidebar__logo">
                        <Logo/>
                    </div>
                    <div className="sidebar__body">
                        <div className="sidebar__sub-title">
                            WebSummit
                        </div>
                        <div className="sidebar__title">
                            Local Meetup
                        </div>
                        <div className="sidebar__details">
                            <div className="sidebar__details-row">
                                <span className="sidebar__details-icon"><FontAwesomeIcon icon={faClock} /></span> <span>1 hr</span>
                            </div>
                            <div className="sidebar__details-row">
                                <span className="sidebar__details-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> <span>Lisbon, Portugal</span>
                            </div>
                        </div>
                        <div className="sidebar__caption">
                            Local Meetup for Entrepreneurs
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;
