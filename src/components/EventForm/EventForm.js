import React from 'react';
import PropTypes from 'prop-types';
import './EventForm.scss';
import authRequests from '../../helpers/data/authRequests';
import eventRequests from '../../helpers/data/eventRequests';

const defaultEvent = {
  event: '',
  startDate: 0,
  location: '',
  uid: '',
};

class EventForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
  }

  state = {
    newEvent: defaultEvent,
  }

  formFieldStringAndNumberState = (name, e) => {
    e.preventDefault();
    const tempEvent = { ...this.state.newEvent };
    tempEvent[name] = e.target.value;
    this.setState({ newEvent: tempEvent });
  }

  eventChange = e => this.formFieldStringAndNumberState('event', e);

  startDateChange = e => this.formFieldStringAndNumberState('startDate', e);

  locationChange = e => this.formFieldStringAndNumberState('location', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myEvent = { ...this.state.newEvent };
    myEvent.uid = authRequests.getCurrentUid();
    onSubmit(myEvent);
    this.setState({ newEvent: defaultEvent });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      eventRequests.getSingleEvent(editId)
        .then((event) => {
          this.setState({ newListing: event.data });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render() {
    const { newEvent } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Event:</h2>;
      }
      return <h2>New Event:</h2>;
    };
    return (
      <div className="event-form col">
        {title()}
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="event">Event Name:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
              placeholder="Mardi Gras"
              value={newEvent.event}
              onChange={this.eventChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Start Date:</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              aria-describedby="imageUrlHelp"
              placeholder="February 13, 2018"
              value={newEvent.startDate}
              onChange={this.startDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="squareFootage">Location:</label>
            <input
              type="text"
              className="form-control"
              id="squareFootage"
              aria-describedby="squareFootageHelp"
              placeholder="100 Canal Street"
              value={newEvent.location}
              onChange={this.locationChange}
            />
          </div>
          <button className="btn btn-danger">Save Event</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
