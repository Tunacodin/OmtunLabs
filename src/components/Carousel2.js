import Carousel from "react-bootstrap/Carousel";

function Carousel2({ images }) {
  return (
    <Carousel data-bs-theme="dark" interval={4000} fade>
    
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel2;
