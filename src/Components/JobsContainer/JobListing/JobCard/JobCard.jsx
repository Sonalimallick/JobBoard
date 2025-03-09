import React from "react";
import "./JobCard.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
function JobCard(props) {
  const navigate = useNavigate();
  const { job } = props;
  const handleApplyJob = () => {
    navigate(`/apply-job/${job?.id}`);
  };
  return (
    <div className="JobCard">
      <div className="JobCard_Image">
        <img src={`${props.ImgSrc || "./assets/NoImage.avif"}`} alt="" />
      </div>
      <div className="JobCard_JobContent">
        <div className="Title d-flex justify-content-between align-items-center">
          <div>{job?.title}</div>
          <Button variant="contained" color="primary" onClick={()=>handleApplyJob(job?.id)}>
            Apply
          </Button>
        </div>
        <div className="Position">
          {job?.job_category}, no. of openings :
          <span className="fw-bold text-danger">{job?.number_of_opening}</span>
        </div>
        <div className="Salary">
          Salary : <span className="fw-bold">₹{job?.salary_from}</span> -
          <span className="fw-bold">₹{job?.salary_to}</span>
        </div>
        <div className="Company">Company : {job?.company}</div>
        <div className="Description">
          {job?.description.length > 50
            ? job?.description.slice(0, 100).concat("...")
            : job?.description}
        </div>
        <div className="Criteria">
          {!!job?.qualifications &&
            JSON.parse(job?.qualifications)?.map((qf) => (
              <span className="badge_qf" key={qf}>
                {qf}
              </span>
            ))}
        </div>
        <div className="JobAttribute">
          <span className="badge">{job?.employment_type}</span>
          <div className="footer">
            <span className="pe-3">🌍 {job?.location}</span>
            <span>📅 {job?.updated_at}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
