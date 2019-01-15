import React from 'react';
import EventItem from '../../EventItem/EventItem';
import authRequests from '../../../helpers/data/authRequests';
import smashRequests from '../../../helpers/data/smashRequests';


class Events extends React.Component {
  state = {
    events: [],
  }

  componentDidMount() {
    const currentUid = authRequests.getCurrentUid();
    smashRequests.getEventsFromMeAndFriends(currentUid)
      .then((events) => {
        this.setState({ events });
      })
      .catch(err => console.error('error with listing GET', err));
  }

  render() {
    const {
      events,
    } = this.state;
    const eventsItemComponents = events.map(event => (
      <EventItem
        event={event}
        key={event.id}
        />
    ));
    
    return (
      <div className='Events'>
          <div class="event-container">
            <div class="event-cards">{eventsItemComponents}</div>
      </div>
    </div>
    );
  }
}

export default Events;
