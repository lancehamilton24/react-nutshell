import React from 'react';

import eventShape from '../../helpers/propz/eventShape';


import './EventItem.scss';

class EventItem extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
  }

  render() {
    const { event } = this.props;


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
