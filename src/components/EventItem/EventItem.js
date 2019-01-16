import React from 'react';
import PropTypes from 'prop-types';
import eventShape from '../../helpers/propz/eventShape';
import authRequests from '../../helpers/data/authRequests';

import './EventItem.scss';

class EventItem extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
    deleteSingleEvent: PropTypes.func,
    passEventToEdit: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleEvent, event } = this.props;
    deleteSingleEvent(event.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passEventToEdit, event } = this.props;
    passEventToEdit(event.id);
  }

  render() {
    const { event } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (event.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-default" onClick={this.editEvent}>
                <i className="fas fa-pencil-alt"></i>
              </button>
            </span>
            <span className="col">
              <button className="btn btn-default" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };


    return (
      <div className="event-container">
        <div className="card">
        <h2 className="event-name">{event.event}</h2>
        <h4 className="event-date">{event.startDate}</h4>
        <h4 className="event-location">{event.location}</h4>
        {makeButtons()}
        </div>
      </div>
    );
  }
}

export default EventItem;
