import React from "react";

export const Card = ({ img, name }) => {
  return (
    <div>
      <div className="w-100 h-auto mr-10 p-1 border-l-2 border-lime-400">
        <img src={img} alt="img" />
      </div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};
