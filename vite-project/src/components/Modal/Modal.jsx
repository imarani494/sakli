import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm, projectName, setProjectName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Project</h2>
<label style={{color:'gray'}}>enter your project name</label>
        <input
          type="text"
          placeholder="type here "
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="modal-input"
        />
        <label style={{color:'red'}}>project name can't be empty</label>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="create-btn" onClick={onConfirm}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
