import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="home-page-image-container">
        <img
          src="/test-image.png"
          className="home-page-image"
          alt="test image"
        ></img>
      </div>
      <Footer />
    </>
  );
}
