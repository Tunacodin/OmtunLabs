import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carouselImage: {
    width: "100%", // Ölçeklenebilir genişlik
    height: "auto", // Ölçeklenebilir yükseklik
    objectFit: "cover", // Resmi tamamen kaplayacak şekilde
  },
  slideNumber: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: "#ffffff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
}));

const ImageCarousel = ({ images, width, height }) => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div style={{ width, height, position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={classes.carouselImage}
              style={{ width, height }}
            />
          </div>
        ))}
      </Slider>
      <div className={classes.slideNumber}>
        Slide {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
