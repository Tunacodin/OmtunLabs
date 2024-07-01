import React from 'react'
import darkColors from '../consts/darkColors';
import colors from '../consts/colors';

const DividerNav = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 60,
        left: 40,
        width: "25rem",
        height: "2px",
        backgroundColor: darkColors.green,
        borderRadius: "1rem",
        boxShadow: `0px 0px 10px ${colors.green}`,
        zIndex: -1,
      }}
    ></div>
  );
}

export default DividerNav