import React from 'react';
import EventItem from '../../EventItem/EventItem';
import authRequests from '../../../helpers/data/authRequests';
import smashRequests from '../../../helpers/data/smashRequests';
import eventRequests from '../../../helpers/data/eventRequests';
import EventForm from '../../EventForm/EventForm';

class Events extends React.Component {
  state = {
    events: [],
    isEditing: false,
    editId: '-1',
  }

  componentDidMount() {
    const currentUid = authRequests.getCurrentUid();
    smashRequests.getEventsFromMeAndFriends(currentUid)
      .then((events) => {
        this.setState({ events });
      })
      .catch(err => console.error('error with listing GET', err));
  }

  formSubmitEvent = (newEvent) => {
    const { isEditing, editId } = this.state;
    if (isEditing) {
      eventRequests.putRequest(editId, newEvent)
        .then(() => {
          eventRequests.getRequest()
            .then((events) => {
              this.setState({ events, isEditing: false, editId: '-1' });
            });
        })
        .catch(err => console.error('error with listings post', err));
    } else {
      eventRequests.postRequest(newEvent)
        .then(() => {
          eventRequests.getRequest()
            .then((events) => {
              this.setState({ events });
            });
        })
        .catch(err => console.error('error with listings post', err));
    }
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
      <div className="row">
          <EventForm onSubmit={this.formSubmitEvent} />
        </div>
    </div>
    );
  }
}

export default Events;
