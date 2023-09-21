import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Store from "../../pages/Anasayfa/Store";
import parse from "html-react-parser";
import Carousel1 from "../../images/Coursel/Carousel1.png";
const Data = new Store();

const Ref = observer(() => {
  useEffect(() => {
    Data.referansGetir();
  }, []);



  return (
    <>
    <div className="container my-20 px-6 mx-auto">
      <section className=" text-gray-800 text-center md:text-left">
      <div className="h-1 bg-gray-200 rounded overflow-hidden mb-8">
              <div className="w-100 h-full bg-blue-500"></div>
            </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Yüzlerce Güler Yüzlü Müşteri 2,000,000+ <br />
              <u className="">Referanslarımız</u>
            </h2>
            {Data.referans && Data.referans.map((r1, i) => (
            <p className="text-gray-500 mb-6">
              
              {parse(r1.yorum)}
            </p>              ))}
          </div>
          {Data.referans &&
                Data.referans.map((r1, i) => (
          <div className="mb-6 md:mb-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="">
      
		
				
		<img 
                  // src={require(`/assets/uploads/files/${r1.resim}`).default}  DOSYA YOLUNU KABUL ETMİYOR 	
     src={"https://www.zirvekayseri.com/assets/uploads/files/"+r1.resim}				  
				className="grayscale px-6"
                  alt="Nasa - log"
                />			
				<div>{r1.firma}</div>
			
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
});

export default Ref


   /*      <img
                  // src={require(`/assets/uploads/files/${r1.resim}`).default}  DOSYA YOLUNU KABUL ETMİYOR 	
     src={Carousel1}				  
				className="grayscale px-6"
                  alt="Nasa - log"
                />
				
				
				  const myStyle={
    backgroundImage:"url(" +
"https://i.pinimg.com/474x/62/69/be/6269be179ab7d610b2a4959387fd77af.jpg"+")",
    width:'100%',
    height:'200px',
    };
	
	*/