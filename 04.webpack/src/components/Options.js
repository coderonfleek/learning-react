//Options Component - SFC
import React from "react";
import Option from "./Option";
const Options = props => {
  return (
    <div>
      <p>
        {/* Bind onClick to the function that was passed down from the parent in a prop */}
        <button onClick={props.handleDeleteOptions}>Delete All</button>
      </p>
      <ol>
        {props.options.map(option => {
          return (
            <Option
              key={option}
              option={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Options;
