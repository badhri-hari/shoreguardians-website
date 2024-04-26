import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <img
        src="/test-image.png"        
        alt="test image"
        className="home-page-image"
      ></img>
      <Footer />
    </>
  );
}
