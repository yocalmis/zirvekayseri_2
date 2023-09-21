import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from "../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../images/Transition/c14.png";
import Transition2 from "../../images/Transition/c15.png";
import Transition3 from "../../images/Transition/c16.png";
import Footer from "../../components/Footer/Footer";
import "./iletisim.css";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

import { observer } from "mobx-react-lite";
import Store from "../../pages/Anasayfa/Store";
const Data = new Store();

const Iletisim = observer(() => {


  useEffect(() => {
    Data.bilgiGetir();
  }, []);
  
  
 const [name, setName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [durum, setDurum] = useState('');
  
 let handleSubmit = async (e) => {
    e.preventDefault();
	
	
    setName('');
    setServiceType('');
    setEmail('');
    setSubject('');
    setMessage('');
	
	
		console.log('İsim:', name);
    console.log('Hizmetler:', serviceType);
    console.log('Mail Adresi:', email);
    console.log('Konu:', subject);
    console.log('Mesaj:', message);	
	

const dt= {name:name , email:email , konu:subject , mesaj:message , tur:serviceType}
const ur="https://www.zirvekayseri.com/api/bilgial";

var myHeaders = new Headers();
myHeaders.append("Cookie", "ci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%225a15f39f3c066bb97ea997a27f691f68%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A12%3A%2254.86.50.139%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.32.3%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1694503711%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D30beadf20d69080f837fa85623e78e38");

var formdata = new FormData();
formdata.append("name", name);
formdata.append("email", email);
formdata.append("konu", subject);
formdata.append("mesaj", message);
formdata.append("tur", serviceType);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://www.zirvekayseri.com/api/bilgial", requestOptions)
  .then(response => response.text())
  .then(result => {
   
    if (result === "Kayıt Başarılı") {
      console.log(result);
	   setDurum(true); 
      console.log(durum);	  
    }
  })
  .catch(error => {  
     console.log('error', error);
	   setDurum("error"); 
      console.log(durum);

  }
 
  );

  };   
  

  return (
    <>
      {Data.bilgi &&
        Data.bilgi.map((bl) => (
          <div key={bl.id}>
            <XTopbar />
            <ANavbar />

            <Carousel fade>
              <Carousel.Item>
                <Link  className="text-white">
                  <img
                    className="d-block w-full object-cover shadow text-white"
                    src={Transition1}
                    alt="First Slide"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>
                    <Link  className="text-white">
                      İletişim
                    </Link>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link  className="text-white">
                  <img
                    className="d-block w-full object-cover shadow"
                    src={Transition2}
                    alt="Second Slide"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>
                    <Link  className="text-white">
                      İletişim
                    </Link>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link  className="text-white">
                  <img
                    className="d-block w-full object-cover border"
                    src={Transition3}
                    alt="Third Slide"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>
                    <Link className="text-white">
                      İletişim
                    </Link>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <section className="map-section">
              <div className="map-container">
                <iframe
                  title="harita"
                  className="map-frame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449.53339262731055!2d35.487861266199545!3d38.724680728946105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b115c06bc19b3%3A0x89bd80a999ab47!2zWsSwUlZFIEtBWVNFUsSw!5e0!3m2!1str!2str!4v1691654635475!5m2!1str!2str"
                  target="_blank"
                  rel="noopener noreferrer"
                ></iframe>
              </div>
            </section>

            <hr className="bg-blue-500 h-1"></hr>

            <section className="contact-details container text-center my-5">
              <div className="address md:mr-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  <MdLocationOn className="inline text-blue-500 mr-2" />
                  ADRES
                </h2>
                <p>
                  <b>{bl.adress}</b>
                </p>
              </div>
              <div className="contact-info">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  <MdEmail className="inline text-blue-500 mr-2" />
                  E-POSTA
                </h2>
                <a href={`mailto:${bl.email}`} className="text-black">
                  {bl.email}
                </a>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  <MdPhone className="inline text-blue-500 mr-2" />
                  TELEFON
                </h2>
                <a href={`tel:${bl.yetkili_telefon}`} className="text-black">
                  {bl.yetkili_telefon}
                </a>
              </div>
            </section>

            <hr className="bg-blue-500 h-1"></hr>

<section className="text-gray-600 body-font relative">
 
      <div className="container px-5 py-3 mx-auto flex text-center self-center items-center justify-center">
        <div className=" bg-white rounded-lg p-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-3 font-medium title-font">Müşterimiz Olun</h2>
          <p className="leading-relaxed mb-4 text-gray-600">
            Gerekli detayları ve bilgileri yazın geri dönüş sağlayalım...
          </p>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
            placeholder="İsim"
          />
          <select
            id="serviceType"
            name="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
          >
            <option value="">Hizmet Seçin</option>
            <option value="MüşavirE-Destek">MüşavirE-Destek</option>
            <option value="Zirve Müşavir">Zirve Müşavir</option>
            <option value="Web Çözümleri">Web Çözümleri</option>
            <option value="Veri Kurtarma">Veri Kurtarma</option>
            <option value="Terminal Sistemleri">Terminal Sistemleri</option>
          </select>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
            placeholder="Mail Adresi"
          />
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
            placeholder="Konu"
          />
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-3"
            placeholder="Mesajınız..."
          />
          <button
            onClick={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Gönder
          </button>
          <p className="text-xs text-gray-500 mt-3">
           Zirve Kayseri @2023 Haklarınızı Saklı Tutar.
		   
          </p>
		  <div>
		{
			
durum===true ? <p>Gönderim başarılı!</p> 
      : durum===false ? <p>Gönderim başarısız!</p>
      : <p></p>
		
		}
		  
		  </div>
        </div>
      </div>
    </section> 

            <br />
            <Footer />
          </div>
        ))}
    </>
    );
  });

export default Iletisim;


/*

            <section className="feedback-form container">
              <div className="form-container">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  İLETIŞIMDE KALIN
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  İstek - Öneri - Şikayetlerinizi önemsiyoruz. Bize yazın.
                </p>
               
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    E-Posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="konu" className="leading-7 text-sm text-gray-600">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="konu"
                    name="konu"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Gönder
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Tüm Haklar Zirve Kayseri'ye aittir.
                </p>
              </div>
            </section>


*/