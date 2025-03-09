import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router";
import NotFound from "./Pages/NotFound/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobsData } from "./Redux/JobReducer/JobSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobsData());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
