import React from "react";
import { useLocation, Link } from "react-router-dom";

function Success() {
  const { state } = useLocation();

  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Back to Form</Link>
    </div>
  );
}

export default Success;
