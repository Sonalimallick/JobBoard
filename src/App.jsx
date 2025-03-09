import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router";
import NotFound from "./Pages/NotFound/NotFound";
import AuthHoc from "./Auth/AuthHoc";
import LoginPage from "./Pages/Login/Login";
import { SignupPage } from "./Pages/Signup/Signup";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          exact={true}
          element={
            <AuthHoc path="/login" isPrivate={false} element={<LoginPage/>} />
          }
        />
         <Route
          path="/signup"
          exact={true}
          element={
            <AuthHoc path="/signup" isPrivate={false} element={<SignupPage/>} />
          }
        />
        <Route
          path="/"
          exact={true}
          element={<AuthHoc path="/" isPrivate={true} element={<Home />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
