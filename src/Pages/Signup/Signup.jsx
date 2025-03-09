import {
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const SignupPage = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordSuggestions, setPasswordSuggestions] = useState([]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    const suggestions = [];

    if (password.length >= 6) strength++;
    else suggestions.push("At least 6 characters long");

    if (/[A-Z]/.test(password)) strength++;
    else suggestions.push("Include at least one uppercase letter");

    if (/[0-9]/.test(password)) strength++;
    else suggestions.push("Include at least one number");

    if (/[^A-Za-z0-9]/.test(password)) strength++;
    else suggestions.push("Include at least one special character");

    setPasswordSuggestions(suggestions);
    return strength;
  };
  const handleSignup = () => {
    const availableUsers = localStorage.getItem("availableUsers")
      ? JSON.parse(localStorage.getItem("availableUsers"))
      : [];
    if (availableUsers?.find((user) => user.email === email)) {
      return toast.error("Email already exists");
    } else {
      availableUsers.push({ username, email, password });
      localStorage.setItem("availableUsers", JSON.stringify(availableUsers));
      navigate("/login");
      return toast.success("User successfully registered");
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
            Signup
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    isEmailValid === false
                      ? "red"
                      : isEmailValid === true
                      ? "green"
                      : "",
                },
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
            onChange={(e) => {
              setPassword(e.target.value);
              const strength = checkPasswordStrength(e.target.value);
              setPasswordStrength(strength);
            }}
            error={passwordStrength < 3}
            helperText={
              passwordStrength < 3
                ? "Password is too weak"
                : passwordStrength === 3
                ? "Password is medium strength"
                : "Password is strong"
            }
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    passwordStrength < 2
                      ? "red"
                      : passwordStrength === 3
                      ? "yellow"
                      : "green",
                },
              },
            }}
          />
          {passwordSuggestions.length > 0 && (
            <List>
              {passwordSuggestions.map((suggestion, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${suggestion}`} />
                </ListItem>
              ))}
            </List>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-3"
            disabled={passwordStrength < 3 || !isEmailValid || !username}
            onClick={handleSignup}
          >
            Signup
          </Button>
          <Typography
            variant="body2"
            className="mt-3"
            style={{ textAlign: "center" }}
          >
            Already have an account? <Button color="secondary">Login</Button>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
