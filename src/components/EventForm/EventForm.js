import React from 'react';
import PropTypes from 'prop-types';
import './EventForm.scss';
import authRequests from '../../helpers/data/authRequests';
import eventRequests from '../../helpers/data/eventRequests';

const defaultEvent = {
  event: '',
  startDate: 0,
  location: '',
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

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempEvent = { ...this.state.newEvent };
    tempEvent[name] = e.target.value;
    this.setState({ newEvent: tempEvent });
  }

  formFieldNumberState = (name, e) => {
    const tempEvent = { ...this.state.newEvent };
    tempEvent[name] = e.target.value * 1;
    this.setState({ newEvent: tempEvent });
  }

  eventChange = e => this.formFieldStringState('event', e);

  startDateChange = e => this.formFieldNumberState('startDate', e);

  locationChange = e => this.formFieldStringState('location', e);

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
          this.setState({ newListing: listing.data });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render() {
    const { newListing } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Listing:</h2>;
      }
      return <h2>Add New Listing:</h2>;
    };
    return (
      <div className="listing-form col">
        {title()}
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
              placeholder="123 Main Street Nashville, TN 37209"
              value={newListing.address}
              onChange={this.addressChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              aria-describedby="imageUrlHelp"
              placeholder="www.google.com"
              value={newListing.imageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="squareFootage">Square Footage:</label>
            <input
              type="number"
              className="form-control"
              id="squareFootage"
              aria-describedby="squareFootageHelp"
              placeholder="1234"
              value={newListing.squareFootage}
              onChange={this.squareFootageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numBeds">Number of Bedrooms:</label>
            <input
              type="number"
              className="form-control"
              id="numBeds"
              aria-describedby="numBedsHelp"
              placeholder="4"
              value={newListing.numBeds}
              onChange={this.numBedsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numBaths">Number of Bathrooms:</label>
            <input
              type="number"
              className="form-control"
              id="numBaths"
              aria-describedby="numBathsHelp"
              placeholder="2"
              value={newListing.numBaths}
              onChange={this.numBathsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              aria-describedby="priceHelp"
              placeholder="123345345"
              value={newListing.price}
              onChange={this.priceChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="heating">Heating:</label>
            <input
              type="text"
              className="form-control"
              id="heating"
              aria-describedby="heatingHelp"
              placeholder="Fireplace"
              value={newListing.heating}
              onChange={this.heatingChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cooling">Cooling:</label>
            <input
              type="text"
              className="form-control"
              id="cooling"
              aria-describedby="coolingHelp"
              placeholder="AC"
              value={newListing.cooling}
              onChange={this.coolingChange}
            />
          </div>
          <button className="btn btn-danger">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
