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
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="bg-blue-600 text-white p-2 rounded-xl w-full md:w-96 mt-4 hover:drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] hover:ring-offset-2 hover:ring-2 duration-100"
    >
      {props.children}
    </button>
  );
};

export const TextInput = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      className="p-2 border rounded-md w-full md:w-96"
      maxLength={props.maxLength}
    />
  );
};
