import React from 'react';
import './NotificationModal.css';

function NotificationModal({ message, type, onClose }) {
  if (!message) return null; // Don't render if there's no message

  const modalClass = `modal ${type}`; // 'modal success' or 'modal error'

  return (
    <div className="modal-overlay">
      <div className={modalClass}>
        <div className="modal-header">
          <h2>{type === 'success' ? 'Success!' : 'Error!'}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button className="ok-button" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;