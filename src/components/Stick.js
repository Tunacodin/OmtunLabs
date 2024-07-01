import React from 'react'

const Stick = ({style,stickyBg}) => {
  return (
    <div
      style={{
        position: "absolute",
        right: ".5rem",
        width: "5rem",
        height: "25rem",
        display: "flex",
        flexDirection: "row",
overflow: "hidden",
        ...style
      }}
    >
      <img
        src={stickyBg}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default Stick