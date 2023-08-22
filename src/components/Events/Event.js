import React, { useEffect } from "react";
import parse from "html-react-parser";
import { observer } from "mobx-react-lite";
import Store from "../../pages/Anasayfa/Store";
const Data = new Store();

const Event = observer(({ props }) => {
  useEffect(() => {
    Data.etkinlikGetir();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-50 h-full bg-blue-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-3">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Etkinlikler</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Katıldığımız etkinlikler listesi aldığımız ödüller ve daha fazlası...</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {Data.etkinlik &&
                Data.etkinlik.slice(0, 3).map((et, i) => (
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{et.header}</h2>
              <p className="text-base leading-relaxed mt-2"> {parse(et.manset)}{" "}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});
export default Event;
