//Option Component - SFC
import React from "react";

const Option = props => {
  return (
    <li>
      {props.option} &nbsp;
      <button
        onClick={() => {
          props.handleDeleteOption(props.option);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default Option;
