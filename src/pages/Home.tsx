import Base from "../components/Base";
import Main from "../components/Main";
import About from "../components/About";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";

const Home = () => {
  const [next, setNext] = useState(1);
  const height = window.innerHeight;

  const goNext = () => {
    // Calculate the target position based on the next section
    const targetPosition = next * height;

    // Scroll to the calculated position
    window.scrollTo({
      behavior: "smooth", // Add smooth scrolling behavior
      top: targetPosition,
    });
  };

  const arrowClickHandler = () => {
    setNext((prev) => prev + 1);
    goNext();
  };

  // Listen to scroll events and update the "next" screen accordingly
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const newNext = Math.floor(currentPosition / height) + 1;
      setNext(newNext);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <Base>
      <Main arrowClickHandler={arrowClickHandler} />
      <About arrowClickHandler={arrowClickHandler} />
      <Contact arrowClickHandler={arrowClickHandler} />
    </Base>
  );
};

export default Home;
