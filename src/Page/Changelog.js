import React from "react";
import { useParams } from "react-router-dom";

/**
 * @author
 * @function Changelog
 **/

export const Changelog = (props) => {
  const { id } = useParams();
  return <div>Changelog - {id}</div>;
};
