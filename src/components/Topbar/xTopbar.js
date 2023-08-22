import React, { useEffect, } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { observer } from "mobx-react-lite"
import Store from "../../pages/Anasayfa/Store"
const Data = new Store();

const XTopbar =observer( () => {
	


  useEffect(() => {

Data.bilgiGetir();

  }, []);
 
  
  const handlePhoneClick = () => {
    window.location.href = 'tel:03522312536';
  };
  return (
 <>
         {Data.bilgi && Data.bilgi.map((bl)=> (
	  
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-3 md:flex md:items-center md:justify-between">
        <div className="flex items-center">
          <div className="ml-2">
            <span className="font-bold">Müşteri Hizmetleri:</span>
            <span className="ml-1" onClick={handlePhoneClick}>{ bl.tel_1 }</span>
          </div>
          <div className="flex items-center pl-3 md:ml-4">
            <span className="font-bold pr-1 animate-pulse"><a href={ bl.maps }>Adresimiz</a></span>
            <FiMapPin className="animate-pulse" size={24} />
          </div>
        </div>
        <div>
          <span className="font-bold">Çalışma Saatleri:</span>
          <span className="ml-1">Hafta içi: 8:30 - 18:30 / Hafta sonu: Kapalı</span>
        </div>
      </div>
    </div>    ))}
	</>
  );
	 
	
	} )



export default XTopbar;






