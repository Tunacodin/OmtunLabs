import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")({

  backgroundColor: "#16181b",
});

const Heading = styled("h1")({
  color: "#dbd56e",
  background: "-webkit-linear-gradient(25deg, #eee, #333)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "3rem",
  fontWeight: 500,
  overflow: "hidden",
  whiteSpace: "nowrap",
  borderRight: "2px solid",
  position: "relative",
  animation:
    "type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite",
});

const TextAnimation = ({text}) => {
  return (
    <Container>
      <Heading>{text}</Heading>
    </Container>
  );
};

export default TextAnimation;
