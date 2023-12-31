import React from "react";
import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from "../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../images/Transition/c14.png";
import Transition2 from "../../images/Transition/c15.png";
import Transition3 from "../../images/Transition/c16.png";
import Footer from "../../components/Footer/Footer";

function Hizmetler() {
  return (
  <>
      <XTopbar />
      <ANavbar />

      <Carousel fade>
        <Carousel.Item>
          <a  className="text-white">
            <img
              className="d-block w-full object-cover shadow text-white"
              src={Transition1}
              alt="First Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a  className="text-white">
                Hakkımızda
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a  className="text-white">
            <img
              className="d-block w-full object-cover shadow"
              src={Transition2}
              alt="Second Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a  className="text-white">
                Hakkımızda
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a  className="text-white">
            <img
              className="d-block w-full object-cover border"
              src={Transition3}
              alt="Third Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a  className="text-white">
                Hakkımızda
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      



      <Footer />
    </>
  )
}

export default Hizmetler