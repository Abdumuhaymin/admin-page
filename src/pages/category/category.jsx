import React from "react";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <div>
      <Link to="/app/category/create">CREATE</Link>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  );
};
