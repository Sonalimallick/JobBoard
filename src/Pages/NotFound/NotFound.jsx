import React from "react";
import "./NotFound.css";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <img src={"/assets/NotFound.webp"} alt="Not Found" />
      <p>
        Sorry, the page you are looking for does not exist.{" "}
        <a href="/">Click here</a>
      </p>
    </div>
  );
}

export default NotFound;
