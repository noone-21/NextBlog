import ReactDOM from 'react-dom'

import classes from './notification.module.css';

export default function Notification(props) {

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal( 
    <div className={activeClasses}  >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  , document.getElementById('notifications'))
}

