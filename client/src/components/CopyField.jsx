import React from "react";

export default function CopyField({ label, textToCopy }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert(`${label} copied to clipboard!`))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="flex items-center bg-sky-300 justify-between p-1 m-1 border border-gray-300 rounded-md">
      <span className="text-slate-500">{textToCopy}</span>
      <button
        onClick={copyToClipboard}
        className="px-1 py-1 ml-4 text-white bg-lime-300 rounded hover:bg-lime-600"
      >
        Copy
      </button>
    </div>
  );
}
