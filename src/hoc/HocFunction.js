import React, { useState } from 'react';

export const HocFunction = (Component) => {
  return (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow((prev) => !prev);
    };
    return <Component isShow={show} handleShow={handleShow} {...props} />;
  };
};
