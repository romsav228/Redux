import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div>Not found</div>
      <Link to="..">Back</Link>
    </div>
  );
};
