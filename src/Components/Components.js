import React from "react";

/**
 * @author
 * @function Components
 **/

export const Components = (props) => {
  return <div>Components</div>;
};

export const Label = (props) => {
  return (
    <div className="mb-2 text-left">
      <p className="mr-4 px-2 text-gray-600 text-sm">{props.text}</p>
      {props.children}
    </div>
  );
};

export const Button = (props) => {
  let className = "";
  switch (props.variant) {
    case "outline":
      className =
        "border-slate-600 border-2 text-slate-600 p-2 rounded-xl w-full md:w-96 mt-4 hover:drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] hover:ring-offset-2 hover:ring-2 hover:ring-black duration-100";
      break;

    default:
      className =
        // hover:drop-shadow-[0_10px_8px_rgba(0,0,0,0.1)]
        "border-2 border-slate-800 bg-slate-800 text-white p-2 rounded-xl w-full md:w-96 mt-4 hover:drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] hover:ring-offset-2 hover:ring-2 hover:ring-black duration-100";
      break;
  }
  return (
    <button type={props.type} onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
};

export const TextInput = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className={`p-2 px-4 border rounded-md w-full md:w-96 focus:outline focus:outline-2 focus:outline-slate-800 ${props.className}`}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
};
