import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar/aNavbar.css";
import Logo from "./logo/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

import { observer } from "mobx-react-lite"
import Store from "../../pages/Anasayfa/Store"
const Data = new Store();



const ANavbar =observer( () => {

  
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {

	Data.bilgiGetir();	  
	  
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        hideDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
   <> 
           {Data.bilgi && Data.bilgi.map((bl)=> (

   <header>
 <img onClick={()=> window.open(bl.web_url)}  src={Logo} alt="Logo" className="h-50 block" /> 
    <nav ref={navRef} className={showDropdown ? "responsive_nav" : ""}>
        <div className="block lg:hidden">
          <img src={Logo} alt="Logo" />
        </div>
        <a href="/">Anasayfa</a>
        <a href="/hakkimizda">Kurumsal</a>
        <NavDropdown title="Hizmetler" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/ozel-Yazilim" className="pt-3 text-xs">
            <h4>Özel Yazılım</h4>
            <p>Web Paketleri, Müşavir E-Destek, Kişiye ve Kuruma Özel Yazılımlar.</p>
          </NavDropdown.Item>
          <NavDropdown.Item href="/Zirve-Urunleri" className="pt-3 text-xs">
            <h4>Zirve Ürünleri</h4>
            <p>Müşavir, Ticari, Finansman, Üretim , Bordro Programları</p>
          </NavDropdown.Item>
          <NavDropdown.Item href="/Servis-Bakim-ve-Onarim" className="pt-3 ">
            <h4>Servis Bakım ve Onarım</h4>
            <p>Servis bakım ve onarım, Veri Kurtarma, Sunucu, Server İşlemleri.</p>
          </NavDropdown.Item>
        </NavDropdown>
        <a href="/e-imza">E-İmza</a>
        <a href="/ik">Personel Temin</a>
        <a href="https://blog.zirvekayseri.com/">Blog</a>
        <a href="/iletisim">İletişim</a>
        <button className="nav-btn nav-close-btn" onClick={hideDropdown}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleDropdown}>
        <FaBars />
      </button>
    </header>))}</>
  );
	 
	
	} )



export default ANavbar;


