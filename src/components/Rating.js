import React from "react";
import { Rating } from "@mui/material";
import { styled } from "@mui/system";

const CustomRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FFA500", // Turuncu renk
  },
  "& .MuiRating-iconHover": {
    color: "#FFA500",
  },
  "& .MuiRating-iconEmpty": {
    color: "transparent",
    stroke: "#FFFFFF", // Beyaz kenar
    strokeWidth: .1, // Kenar kalınlığı
  },
});

const RateDiv = ({ defaultValue }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent", // Arka plan transparan
        padding: "1rem",
      }}
    >
      <CustomRating name="custom-rating" defaultValue={defaultValue} precision={0.5} />
    </div>
  );
};

export default RateDiv;
