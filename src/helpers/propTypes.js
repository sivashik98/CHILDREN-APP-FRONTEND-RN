import PropTypes from 'prop-types';

export const style = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.arrayOf(PropTypes.any),
]);

export const ref = PropTypes.shape({current: PropTypes.any});
