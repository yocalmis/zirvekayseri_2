import React, { useState,useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Store from "../../pages/Anasayfa/Store";
const Data = new Store();

const Content = observer(() => {
  useEffect(() => {
    Data.bilgiGetir();
  }, []);

  const [name, setName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the form submission, for example, sending the data to a server or logging it.
    // You can access the form data using the state variables (name, serviceType, email, subject, and message).
    // For demonstration purposes, let's log the data to the console.
    console.log('İsim:', name);
    console.log('Hizmetler:', serviceType);
    console.log('Mail Adresi:', email);
    console.log('Konu:', subject);
    console.log('Mesaj:', message);

    // Clear form fields after submission
    setName('');
    setServiceType('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        {Data.bilgi && Data.bilgi.map((c1, i) => (
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src={c1.maps} //* BURASI KONTROL EDİLECEK PANELDEKİ İLE AYNI OLACAK https://maps.google.com/maps?width=100%&height=600&hl=en&q=Kayseri%20Zirve%20Kayseri&ie=UTF8&t=&z=14&iwloc=B&output=embed Bunun ile calışıyor. **/ 
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>))}
      </div>
      <div className="container px-5 py-3 mx-auto flex text-center self-center items-center justify-center">
        <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
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
        </div>
      </div>
    </section> 
    
    );
  });

export default Content;
