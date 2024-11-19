import React, { useState } from "react";
import white from "../../assets/images/white.png";
import icon1 from "../../assets/icons/notification.png";
import icon2 from "../../assets/icons/noti.png";
import quese from "../../assets/images/QuesLogo.png";
import group from "../../assets/images/Group 16 (1).png";
import Modal from "../Modal/Modal"; // Import the Modal component
import "./Project.css";
import { Link } from "react-router-dom";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setProjectName("");
  };

  const handleCreate = () => {
    if (projectName.trim()) {
      setProjects([...projects, projectName]);
      closeModal();
    } else {
      alert("Please enter a valid project name.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="white-group">
          <img src={quese} alt="Logo" />
        </div>
        <div className="icon-group">
          <img src={icon1} alt="Notification Icon" className="icon" />
          <img src={icon2} alt="Alert Icon" className="icon-main" />
        </div>
      </div>

      <div className="box">
        <div className="content">
          <h1>Create a New Project</h1>
          <img src={group} alt="Group " className="group-main" />
          <div className="text-name">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </p>
          </div>
          <button className="add-btn" onClick={openModal}>
            + Create New Project
          </button>
          <div className="projects-list">
            {projects.map((project, index) => (
              <p key={index} className="project-item">
                {project}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleCreate}
        projectName={projectName}
        setProjectName={setProjectName}
      />
      <Link to="/project">Go to Project Page</Link>
    </>
  );
};

export default Project;
