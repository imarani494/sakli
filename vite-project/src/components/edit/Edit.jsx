import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Edit.css';
import Queue from "../../assets/images/QuesLogo.png";
import Vector from "../../assets/images/Vector.png";
import Length from "../../assets/images/length.png";
import Copy from "../../assets/images/copy.png";
import Diamond from "../../assets/images/diamond.png";
import Cog from "../../assets/images/cog.png";
import Logout from "../../assets/images/logout.png";
import Bell from "../../assets/images/bell.png";
import Home from "../../assets/images/home.png";
import Arror from "../../assets/images/ep_back.png";

const Edit = () => {
  const [fileName, setFileName] = useState("");
  const [podcastName, setPodcastName] = useState("");
  const [podcastLink, setPodcastLink] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Podcast Details:\nName: ${podcastName}\nLink: ${podcastLink}\nFile: ${fileName}`
    );
  };

  const handleAddPodcast = (action) => {
    alert(`${action} clicked!`);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={Queue} alt="Queue Logo" className="logo" />
        <div className="menu-item" onClick={() => handleAddPodcast("Add Podcast")}>
          <img src={Vector} alt="Add Podcast Icon" className="icon" />
          <p>Add Podcast</p>
        </div>
        <div className="menu-item" onClick={() => handleAddPodcast("Create & Repurpose")}>
          <img src={Length} alt="Create & Repurpose Icon" className="icon" />
          <p>Create & Repurpose</p>
        </div>
        <div className="menu-item" onClick={() => handleAddPodcast("Podcast Widget")}>
          <img src={Copy} alt="Podcast Widget Icon" className="icon" />
          <p>Podcast Widget</p>
        </div>
        <div className="menu-item" onClick={() => handleAddPodcast("Upgrade")}>
          <img src={Diamond} alt="Upgrade Icon" className="icon" />
          <p>Upgrade</p>
        </div>
        <hr className="divider" />
        <div className="menu-item help">
          <img src={Cog} alt="Settings Icon" className="icon" />
          <p>Help</p>
        </div>
      </div>

      
      <div className="main-section">
      <img src={Home} alt="Home" style={{height:'40px',width:'40px',marginTop:'-110px'}} />
        <div className="header">
          <div className="left">
            <img src={Arror} alt="Back Icon" className="arrow-icon" />
            <h1>Edit Your Podcast</h1>
          </div>
          <div className="right">
            <button className="discard-btn">Discard</button>
            <button className="save-btn">Save</button>
          </div>
        </div>

        <div className="card">
          <h2 className="data">Speaker</h2>
          <p className="speak-text">
          Speaker

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          </p>
        </div>
      </div>

     
      <div className="notifications">
        <img src={Bell} alt="Notifications Icon" className="icon" />
        <img src={Logout} alt="Logout Icon" className="icon" />
      </div>
    </div>
  );
};

export default Edit;
