import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Stack,
  Container,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ApplyJob = () => {
  const { job_id } = useParams();
  const navigate = useNavigate();
  const { jobData } = useSelector((state) => state?.jobs);
  const [cv, setCv] = useState(null);
  const [applied, setApplied] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);
  const job = jobData?.find((jd) => jd.id === job_id);
  const handleCvUpload = (e) => setCv(e.target.files[0]);
  const handleCoverLetterUpload = (e) => setCoverLetter(e.target.files[0]);
  const handleSubmit = () => {
    console.log("CV:", cv);
    console.log("Cover Letter:", coverLetter);
    toast.success("Application submitted successfully!");
    setApplied(true);
  };
  useEffect(() => {
    if(!job_id || !job){
      toast.error("Job not found");
      navigate("/");
      return;
    }
  }, [job, job_id, navigate])
  
  return (
    <Container className="mt-4">
      <Card>
        <CardContent>
          <Typography variant="h4" className="mb-3">
            Apply for {job?.title}
          </Typography>
          <Stack spacing={3}>
            <Typography variant="h6">Position: {job?.job_category}</Typography>
            <Typography variant="h6">
              Openings: {job?.number_of_opening}
            </Typography>
            <Typography variant="h6">
              Salary: ₹{job?.salary_from} - ₹{job?.salary_to}
            </Typography>
            <Typography variant="h6">Company: {job?.company}</Typography>
            <Typography variant="body1">{job?.description}</Typography>
            <div className="my-3">
              {job?.qualifications &&
                JSON.parse(job.qualifications).map((qf) => (
                  <span className="badge bg-secondary me-2" key={qf}>
                    {qf}
                  </span>
                ))}
            </div>
          </Stack>

          <hr />
          {!applied ? (
            <>
              <Typography variant="h5" className="mb-3">
                Upload Your Documents
              </Typography>
              <Stack spacing={3}>
                <TextField
                  type="file"
                  fullWidth
                  onChange={handleCvUpload}
                  inputProps={{ accept: ".pdf,.doc,.docx" }}
                  helperText="Upload CV/Resume (PDF/DOC)"
                />
                <TextField
                  type="file"
                  fullWidth
                  onChange={handleCoverLetterUpload}
                  inputProps={{ accept: ".pdf,.doc,.docx" }}
                  helperText="Upload Cover Letter (PDF/DOC)"
                />
              </Stack>
              <div className="text-center mt-4">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={!cv || !coverLetter}
                >
                  Submit Application
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center mt-4">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
              >
                Job Dashboard
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ApplyJob;
