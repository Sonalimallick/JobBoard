import React from "react";
import "./JobCard.css";
function JobCard(props) {
  return (
    <div className="JobCard">
      <div className="JobCard_Image">
        <img src={`${props.ImgSrc || "./assets/NoImage.avif"}`} alt="" />
      </div>
      <div className="JobCard_JobContent">
        <div class="title">24TASK</div>
        <div class="position">Full Stack Developer</div>
        <div>
          <span class="badge">FULLTIME</span>
          <div class="footer">
            <span>🌍 IN</span>
            <span>📅 2023-09-27</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
