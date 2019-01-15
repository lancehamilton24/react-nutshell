import React from 'react';
import EventItem from '../../EventItem/EventItem';
import authRequests from '../../../helpers/data/authRequests';
import smashRequests from '../../../helpers/data/smashRequests';
import eventRequests from '../../../helpers/data/eventRequests';
import EventForm from '../../EventForm/EventForm';

class Events extends React.Component {
  state = {
    events: [],
  }

  componentDidMount() {
    eventRequests.getAllEvents()
      .then((events) => {
        this.setState({ events });
      })
      .catch(err => console.error('error with listing GET', err));
  }

  deleteOne = (eventId) => {
    eventRequests.deleteEvent(eventId)
      .then(() => {
        eventRequests.getAllEvents()
          .then((events) => {
            this.setState({ events });
          });
      })
      .catch(err => console.error('error with delete single', err));
  }

  formSubmitEvent = (newEvent) => {
    eventRequests.postRequest(newEvent)
      .then(() => {
        const currentUid = authRequests.getCurrentUid();
        smashRequests.getEventsFromMeAndFriends(currentUid)
          .then((events) => {
            this.setState({ events });
          });
      })
      .catch(err => console.error('error with listings post', err));
  }

  render() {
    const {
      events,
    } = this.state;
    const eventsItemComponents = events.map(event => (
      <EventItem
        event={event}
        deleteSingleEvent={this.deleteOne}
        key={event.id}
        />
    ));

    return (
      <div className='Events'>
          <div class="event-container">
            <div class="event-cards">{eventsItemComponents}</div>
      </div>
      <div className="row">
          <EventForm onSubmit={this.formSubmitEvent} />
        </div>
    </div>
    );
  }
}

export default Events;
