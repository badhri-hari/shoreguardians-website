import { useState, useEffect } from "react";
import { VStack, Stack, StackDivider } from "@chakra-ui/react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight, innerWidth } = window;

    setPosition({
      left: (clientX / innerWidth) * 100,
      top: (clientY / innerHeight) * 100,
    });
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = import.meta.glob("/public/home-page-pictures/*.jpg");
      const imagePaths = await Promise.all(
        Object.keys(images).map(async (path) => {
          const module = await images[path]();
          return module.default;
        })
      );

      const shuffledImages = imagePaths.sort(() => Math.random() - 0.5);
      setImages(shuffledImages);
    };

    fetchImages();

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setFade(true), 1000);
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  return (
    <>
      <div
        className="blob"
        style={{
          position: "fixed",
          left: `${position.left}vw`,
          top: `${position.top}vh`,
          transition: "left 0.3s, top 0.3s",
        }}
      ></div>
      <div className="content-blur" onPointerMove={handlePointerMove}>
        <Nav />
        <div className="home-container">
          <VStack className="about-mission-overlay">
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="about-us-component"
            >
              <div className="about-us">
                <h2>About Us</h2>
                <p>
                  ShoreGuardians is a high school student-led initiative
                  dedicated to promoting social responsibility among
                  Chennai&#39;s youth. In a society that often prioritizes
                  academic success over civic duty, our club stands out by
                  focusing on instilling civic sense in students from 10th to
                  12th grade. Our mission is to foster a sense of community,
                  environmental stewardship, and active citizenship among the
                  younger generation. We aim to inspire and empower students to
                  take ownership of their surroundings, encouraging them to
                  contribute meaningfully to the betterment of our environment.
                  Through collaborative efforts and consistent engagement, we
                  strive to create a sustainable impact that resonates
                  throughout the community. Our dedicated members work
                  tirelessly to uphold the values of civic responsibility,
                  striving to set an example for their peers and future
                  generations.
                </p>
              </div>
              <div className="rectangle">
                <img
                  src={images[currentImageIndex % images.length]}
                  className={`${
                    fade ? "fade-in-smaller-images" : "fade-out-smaller-images"
                  }`}
                  alt="About Us Image Carousel"
                />
              </div>
            </Stack>
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="our-mission-component"
            >
              <div className="rectangle">
                <img
                  src={images[(currentImageIndex + 2) % images.length]}
                  className={`${
                    fade ? "fade-in-smaller-images" : "fade-out-smaller-images"
                  }`}
                  alt="Our Mission Image Carousel"
                />
              </div>
              <div className="our-mission">
                <h2>Our Mission</h2>
                <p>
                  At ShoreGuardians, our mission is to nurture a sense of civic
                  responsibility and environmental stewardship in the young
                  minds of Chennai. We firmly believe that social responsibility
                  should be ingrained at a young age, despite societal norms
                  that often deem it a waste of time. Our goal is to expand our
                  member base, organize more frequent beach cleanups, and create
                  a cleaner, healthier environment for all. We invite parents,
                  community members, and students to join our cause, support our
                  initiatives through donations, and help us spread the word
                  about the importance of protecting India&#39;s natural beauty.
                </p>
              </div>
            </Stack>
          </VStack>
        </div>
        <Footer />
      </div>
    </>
  );
}
