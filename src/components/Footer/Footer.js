import React, { useEffect } from "react";
import Logo from './logo/logo.png';
import '../Footer/Footer.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { observer } from "mobx-react-lite";
import Store from "../../pages/Anasayfa/Store";
const Data = new Store();

const Footer = observer(() => {
  useEffect(() => {
    Data.bilgiGetir();
  }, []);
  return (
    <footer className="body-font text-white">
          {Data.bilgi && Data.bilgi.map((f1, i) => (
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 animate-fadeIn">
          <img src={Logo} alt="Logo" />
          <span className="ml-3 text-xl"></span>
        </div>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 animate-fadeInUp">
          © 2023 ZirveKayseri — Tüm Hakları Zirve Kayseri´ye Aitir.
        </p>
        <div className="text-center animate-fadeInUp">
          <ul>
            <li className="flex items-center justify-center">
              <h5>İletişim</h5>
            </li>
            <li className="flex items-center justify-center">
              Zirve İnt. Web. Ltd. Şti.
            </li>
            <li className="flex items-center justify-center">
              <FiMapPin className="w-6 h-6 mr-2" />
              {f1.adress}
            </li>
            <li className="flex items-center justify-center">
              <FiPhone className="w-6 h-6 mr-2" />
              <a href={"tel:" + f1.tel_1} className="hover:text-gray-900">
              {f1.tel_1}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <FiMail className="w-6 h-6 mr-2" />
              <a
                href={"mailto:" + f1.email}
                className="hover:text-gray-900"
              >
                {f1.email}
              </a>
            </li>
          </ul>
        </div>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start animate-fadeInUp">
          <a className="text-gray-500" href='#/'>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href='#/'>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href='#/'>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href='#/'>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
      ))}
    </footer>
  );
});
export default Footer;
