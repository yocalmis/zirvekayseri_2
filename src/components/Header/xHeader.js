import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../images/Coursel/Carousel1.png";
import Carousel2 from "../../images/Coursel/Carousel2.png";
import Carousel3 from "../../images/Coursel/Carousel3.png";
import Banner2 from "../../images/banner/banner6.png";
import Banner3 from "../../images/banner/banner4.jpg";
import "./xHeader.css";

import { observer } from "mobx-react-lite"
import Store from "../../pages/Anasayfa/Store"
const Data = new Store();



const XHeader =observer( () => {
	


  useEffect(() => {

Data.bilgiGetir();

  }, []);
 
  return (
  <> 
{Data.bilgi && Data.bilgi.map((bl)=> (
  <div className="container-fluid mx-auto">
      <Row className="flex-wrap">
        <Col
          xs={12}
          sm={6}
          md={3}
          className="d-flex align-items-center justify-content-center banner1 relative"
          style={{ overflow: "hidden" }}
        >
          <img
            className="d-block h-100 w-full object-cover border drop-shadow-xl"
            src={Banner2}
            alt="First Slide"
          />
          <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h5 className="mb-3 textshadows text-base bg-gray-900 bg-opacity-40 rounded-lg p-2">
              Bütçe dostu Bizmu ile e-faturaya geçin, temel ön muhasebenin kolaylıklarını keşfedin!
            </h5>
            <button onClick={()=> window.open(bl.bizmu_link)} className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-2 rounded novaLink textshadows">
              BİZMU
            </button>
            <h5 className="mb-3 textshadows text-base bg-gray-900 bg-opacity-40 mt-2 rounded-lg p-2">
              Zirve Yazılım ürünlerini ücretsiz denemek için bilgilerinizi girin, ilgilendiğiniz ürünü seçin, programı kurarak deneme sürümünü kullanın.
            </h5>
            <button onClick={()=> window.open(bl.demo_indir_link)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded novaLink textshadows">
              DEMO İNDİR
            </button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover shadow text-white"
                src={Carousel1}
                alt="First Slide"
              />
              <Carousel.Caption>
                <h3>Hızlı ve etkin E-dönüşüm için şimdi başlayın!</h3>
                <p>
                  E-fatura/Arşiv başvurunuz bizden! Süreçlerinizi dijitalleştirerek verimliliği artırın. Hemen deneyin!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover shadow"
                src={Carousel2}
                alt="Second Slide"
              />
              <Carousel.Caption>
                <h3>E-İmzayı bu gün teslim al!</h3>
                <p>Aktivasyon ücreti yok. Süreçlerinizi dijitalleştirerek verimliliği artırın. Hemen deneyin!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover border"
                src={Carousel3}
                alt="Third Slide"
              />
              <Carousel.Caption>
                <h3>Mesleğe İlk Adımda Zirve Yanında</h3>
                <p>Mesleğe ilk adımını atan veya yeni ofis açan tüm mali müşavirlerimizin yanındayız! İhtiyacınız olan tüm çözümlere %50 indirimle sahip olun.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={3}
          className="d-flex align-items-center justify-content-center banner1 relative"
          style={{ overflow: "hidden" }}
        >
          <img
            className="d-block h-100 w-full object-cover border"
            src={Banner3}
            alt="First Slide"
          />
          <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h5 className="mb-4 textshadows text-base bg-gray-900 bg-opacity-40 mt-2 rounded-lg p-2">
              Ön muhasebeniz Paraşüt'te, sizin önceliğiniz hedeflerinizde!
            </h5>
            <button onClick={()=> window.open(bl.parasut_link)} className="bg-red-500 text-white font-bold px-3 py-2 rounded parasutLink textshadows">
              PARAŞÜT
            </button>
            <h5 className="mt-6 textshadows text-base bg-gray-900 bg-opacity-40 rounded-lg p-2">
              Uçtan Uca Yenilenen Online Mali Müşavir Programı Zirve Nova 2.0'ı Keşfedin.
            </h5>
            <button onClick={()=> window.open(bl.zirve_nova_link)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded novaLink textshadows">
              ZİRVE NOVA
            </button>
          </div>
        </Col>
      </Row>
      <div className="md:text-center bg-blue-100 items-center pt-3">
        <Row>
          <Col xs={12} sm={12} md={12} className="">
            <h5 className="mb-4 text-blue-600 button-container">
              Uzak Masa Üstü Bağlantıları
              <button onClick={()=> window.open(bl.anydesk_link)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full ml-4">
                AnyDesk
              </button>
              <button onClick={()=> window.open(bl.alpemix_link)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                Alpemix
              </button>
              <button onClick={()=> window.open(bl.teamviewer_link)} className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full ml-4">
                TeamViewer
              </button>
            </h5>
          </Col>
        </Row>
      </div>
    </div>))}</>
  ); 

	 
	
	} )



export default XHeader;














