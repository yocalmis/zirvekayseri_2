import React from "react";
import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from "../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../images/Transition/c14.png";
import Transition2 from "../../images/Transition/c15.png";
import Transition3 from "../../images/Transition/c16.png";
import Footer from "../../components/Footer/Footer";

function Personeltemin() {
  return (
    <>
    
    <XTopbar />
      <ANavbar />

      <Carousel fade>
        <Carousel.Item>
          <a href="#/" className="text-white">
            <img
              className="d-block w-full object-cover shadow text-white"
              src={Transition1}
              alt="First Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a href="#/" className="text-white">
               Personel Temin
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#/" className="text-white">
            <img
              className="d-block w-full object-cover shadow"
              src={Transition2}
              alt="Second Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a href="#/" className="text-white">
              Personel Temin
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#/" className="text-white">
            <img
              className="d-block w-full object-cover border"
              src={Transition3}
              alt="Third Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a href="#/" className="text-white">
              Personel Temin
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <br/><Footer />
    </>
  )
}

export default Personeltemin