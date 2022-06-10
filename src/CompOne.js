import React from 'react';
import { HocFunction } from './hoc/HocFunction';
const CompOne = ({ isShow, handleShow, ...props }) => {
  return (
    <div>
      <h1 style={{ ...props.styleObj }}>This is my first Component</h1>
      {isShow === true ? (
        <button onClick={handleShow}>Hide</button>
      ) : (
        <button onClick={handleShow}>Show</button>
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
export const CompOneHandle = HocFunction(CompOne);
