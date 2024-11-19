import React, { useState } from "react";
import "./Upload.css";
import Queue from "../../assets/images/QuesLogo.png";
import Vector from "../../assets/images/Vector.png";
import Length from "../../assets/images/length.png";
import Copy from "../../assets/images/copy.png";
import Diamond from "../../assets/images/diamond.png";
import Cog from "../../assets/images/cog.png";
import Logout from "../../assets/images/logout.png";
import Bell from "../../assets/images/bell.png";
import Home from "../../assets/images/home.png";
import Feed from "../../assets/images/image 1.png";
import You from "../../assets/images/youtube.png";
import Lotus from "../../assets/images/lotus.png";

const Upload = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fileName, setFileName] = useState("");
  const [podcastName, setPodcastName] = useState("");
  const [podcastLink, setPodcastLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    }
  };

 
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create a preview URL for images and videos
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    }
  };
  const handleSubmit = (event) => {
    alert(
      `Podcast Details:\nName: ${podcastName}\nLink: ${podcastLink}\nFile: ${fileName}`
    );

    event.preventDefault();
    
    if (selectedFile) {
      alert('File uploaded: ' + selectedFile.name);
    } else {
      alert('No file selected.');
    }
    closeModal();
  };

  
  const handleAddPodcast = (buttonType) => {
    switch (buttonType) {
      case "addPodcast":
        alert("Add Podcast clicked!");
        break;
      case "createRepurpose":
        alert("Create & Repurpose clicked!");
        break;
      case "podcastWidget":
        alert("Podcast Widget clicked!");
        break;
      case "upgrade":
        alert("Upgrade clicked!");
        break;
      default:
        alert("Unknown action");
    }
  };

  return (
    <div className="container">
     
      <div className="div-container">
        <div className="ai-div">
          <img src={Queue} alt="Queue" className="logo" />
          <div className="button" onClick={() => handleAddPodcast("addPodcast")}>
            <img src={Vector} alt="Vector" className="icon" />
            <p>Add your Podcast</p>
          </div>
          <div className="create" onClick={() => handleAddPodcast("createRepurpose")}>
            <img src={Length} alt="Length" className="icon" />
            <p>Create & Repurpose</p>
          </div>
          <div className="button" onClick={() => handleAddPodcast("podcastWidget")}>
            <img src={Copy} alt="Copy" className="icon" />
            <p>Podcast Widget</p>
          </div>
          <div className="button" onClick={() => handleAddPodcast("upgrade")}>
            <img src={Diamond} alt="Diamond" className="icon" />
            <p>Upgrade</p>
          </div>
          <div className="line"></div>
          <div className="setting-text">
            <img src={Cog} alt="Cog" className="cog-text" />
            <p className="help">Help</p>
          </div>
        </div>
      </div>

   
      <div className="main-imo">
       
        <div className="left-section">
          <img src={Home} alt="Home" />
          <h1 className="add-text">Add Podcast</h1>

        
          <div className="podcast-section">
            <div className="card-container">
              
              <div className="card">
                <div className="card-content">
                  <div className="card-text">
                    <h2>RSS Feed</h2>
                    <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
                  </div>
                  <div className="card-image">
                    <img src={Feed} alt="RSS Feed" />
                  </div>
                </div>
              </div>

              {/* YouTube Video Card */}
              <div className="card">
                <div className="card-content">
                  <div className="card-text">
                    <h2>YouTube Video</h2>
                    <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
                  </div>
                  <div className="card-image">
                    <img src={You} alt="YouTube Video" />
                  </div>
                </div>
              </div>

             
              <div className="card">
                <div className="card-content">
                  <div className="card-text">
                    <h2>Upload File</h2>
                    <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
                  </div>
                  <div className="card-image">
                    <img src={Feed} alt="Upload File" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="card red-card">
            <div className="card-content">
              <div className="card-text">
                <img src={Lotus} alt="Lotus" style={{ height: "85px", width: "128px" }} />
                <h2>Select a file or drag and drop here (Podcast Media or Transcription Text)</h2>
                <p>MP4, MOV, MP3, WAV, PDF, DOCX, or TXT file</p>
              </div>
              <div className="card-action">
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
                <button onClick={() => openModal()} className="upload-button">
                  Select File
                </button>
              </div>
            </div>
          </div>

          
          {modalVisible && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <img src={You} alt="YouTube" className="you-image" />
                  <p className="upload-text">Upload from YouTube</p>
                  <button className="close-button" onClick={closeModal}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="input-group">
                    <label htmlFor="podcastName">Name:</label>
                    <input
                      type="text"
                      id="podcastName"
                      value={podcastName}
                      onChange={(e) => setPodcastName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="podcastLink">Link:</label>
                    <input
                      type="text"
                      id="podcastLink"
                      value={podcastLink}
                      onChange={(e) => setPodcastLink(e.target.value)}
                    />
                  </div>
                  <div className="button-group">
                    <button className="create-button" onClick={handleSubmit}>
                      Upload
                    </button>
                 
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="right-section">
          <div className="icon-container">
            <img src={Bell} alt="Notifications" className="icon" />
          </div>
          <div className="icon-container">
            <img src={Logout} alt="Logout" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
