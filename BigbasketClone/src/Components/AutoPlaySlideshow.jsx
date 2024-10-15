import { useState, useEffect, useRef } from "react";

const AutoPlaySlideshow = () => {
  const delay = 2500;
  const images = [
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26110.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26109.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26111.jpg?tr=w-1920,q=80",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Function to reset the timeout for autoplay
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    // Autoplay: Set a timeout for changing slides
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      // Clean up the timeout on component unmount or before setting a new timeout
      resetTimeout();
    };
  }, [currentIndex, delay, images.length]);

  // Function to manually go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimeout(); // Restart the timer
  };

  return (
    <div className="slideshow-container" style={styles.container}>
      {/* Slideshow Wrapper */}
      <div
        className="slideshow-slider"
        style={{
          ...styles.slider,
          transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
        }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index} style={styles.slide}>
            <img src={image} alt={`Slide ${index}`} style={styles.image} />
          </div>
        ))}
      </div>

      {/* Dots for manual navigation */}
      <div className="slideshow-dots" style={styles.dotsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#333" : "#ddd",
            }}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Styles as an example, can be customized or moved to a CSS file
const styles = {
  container: {
    position: "relative",
    width: "80%",
    margin:'auto',
    height: "400px",
    overflow: "hidden",
    borderRadius:'10'
  },
  slider: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    height: "100%",
  },
  slide: {
    minWidth: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    margin: "0 5px",
    cursor: "pointer",
    
  },
};

export default AutoPlaySlideshow;
