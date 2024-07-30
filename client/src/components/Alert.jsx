import React from "react";

const Alert = ({ color, children }) => {
  const colorClasses = {
    success: "bg-green-100 border-green-400 text-green-700",
    failure: "bg-red-100 border-red-400 text-red-700",
  };

  return (
    <div
      className={`border-l-4 p-4 ${colorClasses[color]} rounded-md mt-5`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
