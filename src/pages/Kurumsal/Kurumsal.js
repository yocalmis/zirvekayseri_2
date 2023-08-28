import React, { useEffect } from "react";
import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from "../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../images/Transition/c14.png";
import Transition2 from "../../images/Transition/c15.png";
import Transition3 from "../../images/Transition/c16.png";
import Footer from "../../components/Footer/Footer";
import { observer } from "mobx-react-lite";
import parse from "html-react-parser";
import Store from "../Anasayfa/Store";

const Data = new Store();

function TeamMember({ name, role, image, mail, phone }) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-50 h-50 object-cover object-center mb-3"
          src={image}
        />
        <div className="w-full">
          <h2 className="text-gray-500 title-font font-medium text-lg">
            {name}
          </h2>
          <h3 className="text-gray-500 font-medium text-lg">{role}</h3>
          <a className="mb-2 text-black" href={"tel:" + phone}>
            {phone}
          </a>
          <br />
          <a className="mb-4 text-black" href={"mailto:" + mail}>
            {mail}
          </a>
        </div>
      </div>
    </div>
  );
}

const Kurumsal = observer(() => {
  useEffect(() => {
    Data.bilgiGetir();
    Data.personelGetir();
  }, []);

  const teamMembers = Data.personel && Data.personel.slice(0, 8).map((p1, i) => ({
    name: p1.adi,
    role: p1.pozisyon,
    image: "https://dummyimage.com/200x200",
    mail: p1.email,
    phone: p1.telefon,
  }));
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
                  Hakkımızda
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
                  Hakkımızda
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
                  Hakkımızda
                </a>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><div className="container">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
          <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Hakkımızda
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/2 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Hakkımızda :</h2>
                  {Data.bilgi &&
                Data.bilgi.slice(0, 1).map((h1, i) => (
                  <p className="leading-relaxed text-base">{parse(h1.hakkimizda)}</p>
                  ))} </div> 
              </div>
              <div className="p-4 md:w-1/2 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Misyonumuz :</h2>
                  {Data.bilgi &&
                Data.bilgi.slice(0, 1).map((h1, i) => (
                  <p className="leading-relaxed text-base">{parse(h1.hakkimizda)}</p>
                  ))}</div>
              </div>
            </div>
          </div>
        </section>
          </div>
        </section>
        <h1 className="text-center text-black">TAKIM ÜYELERİ</h1>
        <br />
        <div className="row text-black">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  ); 
});

export default Kurumsal;