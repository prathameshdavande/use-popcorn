import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxrating={10} onSetRating={setMovieRating} />
      <p>This Movie has rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxrating={5}
      defaultRating={0}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
      className=""
    />
    <StarRating maxrating={5} size={20} color="red" defaultRating={1} />
    <StarRating maxrating={5} size={20} color="red" defaultRating={1} />
    <Test /> */}
  </React.StrictMode>
);
