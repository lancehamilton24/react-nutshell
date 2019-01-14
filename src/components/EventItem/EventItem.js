import React from 'react';
// import PropTypes from 'prop-types';

import eventShape from '../../helpers/propz/eventShape';
// import authRequests from '../../helpers/data/authRequests';

import './EventItem.scss';

class EventItem extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
  }

  render() {
    const { event } = this.props;
    // const uid = authRequests.getCurrentUid();

    return (
      <div className="event-container card">
        <span className="col-7">{event.event}</span>
        <span className="col-7">{event.startDate}</span>
        <span className="col-7">{event.location}</span>
      </div>
    );
  }
}

export default EventItem;
