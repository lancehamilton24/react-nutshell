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
      <div class="card-deck">
          <div class="card-body text-center">
            <h3>{eventsItemComponents}</h3>
          </div>
      </div>
    </div>
    );
  }
}

export default Events;
