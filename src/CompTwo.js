import React from 'react';
import { HocFunction } from './hoc/HocFunction';
const CompTwo = ({ isShow, handleShow, ...props }) => {
  return (
    <div>
      <h1>This is my secont Component</h1>
      {isShow === true ? (
        <button
          style={{ backgroundColor: props.background }}
          onClick={handleShow}
        >
          Hide
        </button>
      ) : (
        <button
          style={{ backgroundColor: props.background }}
          onClick={handleShow}
        >
          Show
        </button>
      )}
      {isShow && (
        <div>
          <h3>second</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            accusamus.
          </p>
        </div>
      )}
    </div>
  );
};
export const CompTwoHandle = HocFunction(CompTwo);
