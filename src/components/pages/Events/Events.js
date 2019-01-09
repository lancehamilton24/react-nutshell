import React from 'react';
// import './Home.scss';
// import { homedir } from 'os';

class Events extends React.Component {
  render() {
    return (
      <div className='Events'>
      <div class="card-deck">
        <div class="card border-dark" id="events">
          <div class="card-body text-center">
            <h4 class="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Events</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Events;
