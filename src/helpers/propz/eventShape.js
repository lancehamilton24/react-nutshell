import PropTypes from 'prop-types';

const eventShape = PropTypes.shape({
  event: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { eventShape };
