import React from 'react';
// import PropTypes from 'prop-types';

import eventShape from '../../helpers/propz/eventShape';


import './EventItem.scss';

class EventItem extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
  }

  render() {
    const { event } = this.props;


    return (
      <div className="event-container">
        <div className="card">
        <h2 className="event-name">{event.event}</h2>
        <h4 className="event-date">{event.startDate}</h4>
        <h4 className="event-location">{event.location}</h4>
        </div>
      </div>
    );
  }
}

export default EventItem;
