import PropTypes from 'prop-types';
import NotificationCSS from './Notification.module.css';

export const Notification = ({ message }) => {
  <p className={NotificationCSS.paragraph}>{message}</p>;
};


Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
