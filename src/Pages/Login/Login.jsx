import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Invalid email address");
      setIsEmailValid(false);
    } else {
      setError("");
      setIsEmailValid(true);
      const availableUsers =
        JSON.parse(localStorage.getItem("availableUsers")) || [];
      const user = availableUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        toast.error("Please enter proper credentials");
      } else {
        sessionStorage.setItem("authenticated", true);
        sessionStorage.setItem(
          "userDetails",
          JSON.stringify({ name: user?.username })
        );
        navigate("/");
        toast.success("Login successful");
      }
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ maxWidth: 400, width: "100%" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom className="text-center">
            Login
          </Typography>
          {error && <div className="alert alert-danger">{error}</div>}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmailValid(validateEmail(e.target.value));
            }}
            error={isEmailValid === false}
            helperText={isEmailValid === false ? "Invalid email format" : ""}
            InputProps={{
              style: {
                borderColor:
                  isEmailValid === false
                    ? "red"
                    : isEmailValid === true
                    ? "green"
                    : "",
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) =>
              (e.keyCode === 13 || e.key === "Enter") && handleLogin()
            }
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            className="mt-3"
          >
            Login
          </Button>
          <Typography
            variant="body2"
            className="mt-3"
            style={{ textAlign: "center" }}
          >
            New User?{" "}
            <Button color="secondary" onClick={() => navigate("/signup")}>
              Redirect to Signup
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
