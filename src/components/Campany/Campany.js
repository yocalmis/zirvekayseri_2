import React, { useEffect } from "react";
import Carousel1 from "../../images/Coursel/Carousel1.png";
import Carousel2 from "../../images/Coursel/Carousel2.png";
import { Link,useHistory } from "react-router-dom";
import parse from "html-react-parser";
import { observer } from "mobx-react-lite";
import Store from "../../pages/Anasayfa/Store";
const Data = new Store();

const Campany = observer(({ props }) => {
  useEffect(() => {
    Data.kampanyaGetir();
  }, []);
  



  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className=" container py-3 mx-auto flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-25 h-full bg-blue-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-3">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Aktif Kampanyalar
              </h1>
            </div>
          </div>
          <div className="container mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">
              {Data.kampanya &&
                Data.kampanya.slice(0, 1).map((bl, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-2"
                  >
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block absolute inset-0"
                      src={Carousel1}
                    />
                    <div className="text-center relative z-10 w-full bg-gray-400 rounded bg-opacity-40 p-4">
                      <h2 className="text-2xl text-black font-bold title-font mb-2 ">
                        {bl.header}
                      </h2>
                      <p className="leading-relaxed text-blue-800 font-bold ">
                        {parse(bl.manset)}
                      </p>
                      <a
                        href="#/"
                        className="mt-3 inline-flex items-center bg-blue-600 hover:text-white"
                      >
					  
         <div>  <Link to="/kampanya-detay" state={{
			 seo_name: bl.seo_name
			 }}>
          Daha fazla bilgi edin
        </Link>
      </div>
 			  
  
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}

              <div className="flex flex-wrap -mx-2">
                {Data.kampanya &&
                  Data.kampanya.slice(1, 3).map((bl, i) => (
                    <div className="px-2 w-1/2">
                      <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img
                          alt="gallery"
                          className="w-full object-cover h-full object-center block absolute inset-0"
                          src={Carousel2}
                        />
                        <div className="text-center relative z-10 w-full bg-gray-400 rounded bg-opacity-40 p-4">
                          <h2 className="text-xl  title-font mb-2 font-bold text-black">
                            {bl.header}
                          </h2>
                          <p className="leading-relaxed font-bold text-blue-900">
                            {parse(bl.manset)}{" "}
                          </p>
                          <a
                            href="#/"
                            className="mt-3 text-wihte inline-flex items-center bg-blue-600  hover:text-white"
                          >
                            <Link to="/kampanya-detay" state={{
			 seo_name: bl.seo_name
			 }}>
          Daha fazla bilgi edin
        </Link>
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export default Campany;
