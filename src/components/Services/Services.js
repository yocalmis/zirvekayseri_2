import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Store from "../../pages/Anasayfa/Store";
import { observer } from "mobx-react-lite";
const Data = new Store();


const Services = observer(({ props }) => {
  useEffect(() => {
    Data.urunGetir();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-1 py-1 mx-auto">
      <div className="h-1 bg-gray-200 rounded overflow-hidden mb-3">
              <div className="w-75 h-full bg-blue-500"></div>
            </div>
        <div className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ürünlerimiz</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Zirve ürünleri ile, işletmenizin ön muhasebe süreçlerini kolayca yönetin, zamandan ve iş gücünden tasarruf edin.
	  
		  </p>
        </div>
        <div className="flex flex-wrap -m-2">
       

	              {Data.urun &&
                Data.urun.map((bl, i) => (


	   <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 mr-4" src={bl.resim_1} />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">{bl.product_name}</h2>
                <p className="text-gray-500">{bl.kisa_aciklama}</p>
					   <Link style={{color: "red"}}
                          to={{
                            pathname: "/urunDetay",
                              state: { seo_name: bl.seo_name },
                          }}
                        >
                          Daha fazla bilgi edin
                        </Link>
              </div>
            </div>
          </div>
		  
		                ))}  	  
		  
		  
		  
		  
		 
          
        </div>
      </div>
    </section>
  );
});

export default Services;
	
	



