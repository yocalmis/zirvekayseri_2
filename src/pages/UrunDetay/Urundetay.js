import React from "react";
import { Link } from "react-router-dom";
import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from "../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../images/Transition/c14.png";
import Transition2 from "../../images/Transition/c15.png";
import Transition3 from "../../images/Transition/c16.png";
import Footer from "../../components/Footer/Footer";

function Urundetay() {
    const features = [
        /* Urun detay ilk giriş 3 lü icon ve yazıları */
        {
          icon: (
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          ),
          title: "Kampanya Detayı",
          description:
            "Mavi şişe haç vinil post-ironik dört dolarlık tost vegan tahnitçilik. Gastropub indxgo meyve suyu poutine, ramps microdosing banh mi pug VHS try-hard ugh izlanda kickstarter tumblr live-edge tilde.",
        },
        {
          icon: (
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          ),
          title: "Kampanya Detay",
          description:
            "Mavi şişe haç vinil post-ironik dört dolarlık tost vegan tahnitçilik. Gastropub indxgo meyve suyu poutine, ramps microdosing banh mi pug VHS try-hard ugh izlanda kickstarter tumblr live-edge tilde.",
        },
        {
          icon: (
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          ),
          title: "Kampanya Detay",
          description:
            "Mavi şişe haç vinil post-ironik dört dolarlık tost vegan tahnitçilik. Gastropub indxgo meyve suyu poutine, ramps microdosing banh mi pug VHS try-hard ugh izlanda kickstarter tumblr live-edge tilde.",
        },
      ];

  return (
    <>
    <XTopbar />
    <ANavbar />

    <Carousel fade>
      <Carousel.Item>
        <Link href="#/" className="text-white">
          <img
            className="d-block w-full object-cover shadow text-white"
            src={Transition1}
            alt="First Slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>
            <Link href="#/" className="text-white">
            Urun Detay
            </Link>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link href="#/" className="text-white">
          <img
            className="d-block w-full object-cover shadow"
            src={Transition2}
            alt="Second Slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>
            <Link href="#/" className="text-white">
              Urun Detay
            </Link>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link href="#/" className="text-white">
          <img
            className="d-block w-full object-cover border"
            src={Transition3}
            alt="Third Slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>
            <Link href="#/" className="text-white">
            Urun Detay
            </Link>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Meslege ilk Adım Kampanyası!
          <br className="hidden sm:block" />
          Her Zaman Müşavirlerin Yanındayız!
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {features.map((feature, index) => (
            <div className="p-4 md:w-1/3 flex" key={index}>
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {feature.description}
                </p>
                <Link className="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                  Kinfolk bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            {/* ... BAŞLIK 2 ... */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                  Kinfolk bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            {/* ... BAŞLIK 3 ... */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  BAŞLANGIC 1
                </h2>
                <p className="leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            {/* ... BAŞLIK 4 ... */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  BAŞLANGIC 1
                </h2>
                <p className="leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            {/* ... BİTİŞ ... */}
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  BİTİŞ
                </h2>
                <p className="leading-relaxed">
                  Pitchfork ugh tattooed scenester echo park gastropub
                  whatever cold-pressed retro.
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/1200x500"
            alt="step"
          />
        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Daha Fazla bilgi için bizimle iletişime geç:
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
          Sorularınızı ve yardım ihtiyaçlarınızı memnuniyetle karşılarız. Size daha iyi yardımcı olabilmemiz için lütfen iletişime geçin. Her türlü soru ve talebinizi bekliyoruz!
          </p>
          <div className="flex justify-center">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a
                href="tel:+903522312536"
                className="text-black hover:text-blue-600"
              >
                TELEFON : +90 (352) 231 25 36
              </a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>

    <Footer />
  </>
  )
}

export default Urundetay;