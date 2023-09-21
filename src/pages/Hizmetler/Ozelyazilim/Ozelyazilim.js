import React, { useEffect } from "react";
import XTopbar from "../../../components/Topbar/xTopbar";
import ANavbar from "../../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../../images/Transition/c14.png";
import Transition2 from "../../../images/Transition/c15.png";
import Transition3 from "../../../images/Transition/c16.png";
import Footer from "../../../components/Footer/Footer";

import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { observer } from "mobx-react-lite";
import Store from "../../../pages/Anasayfa/Store";
const Data = new Store();

const ozelyazilim = observer(({ props }) => {
  useEffect(() => {
    Data.pageGetir();
  }, []);
  
  
 const services = () => {
  return (
    <>
      {Data.page &&
        Data.page.map((bl, i) => {
          if (bl.id == 15 || bl.id == 17 || bl.id == 18) {
            return (
              <section key={i} className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                  <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src="https://dummyimage.com/1200x500"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
						  {bl.p_name}
                          </h2>
                          <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                          <p className="text-base">
                            {parse(bl.header)}
                          </p>
                        </div>
                      </div>
                      <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                          {parse(bl.content)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          return null; // Bu bloğun dışındaki elemanları dikkate alma
        })}
    </>
  );
};

  
  

  return (
    <>
      <XTopbar />
      <ANavbar />

      <Carousel fade>
        <Carousel.Item>
          <Link  className="text-white">
            {" "}
            {/* Link bileşeni kullanıldı */}
            <img
              className="d-block w-full object-cover shadow text-white"
              src={Transition1}
              alt="First Slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>
              <Link  className="text-white">
                {" "}
                {/* Link bileşeni kullanıldı */}
                Özel Yazılım
              </Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link  className="text-white">
            {" "}
            {/* Link bileşeni kullanıldı */}
            <img
              className="d-block w-full object-cover shadow"
              src={Transition2}
              alt="Second Slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>
              <Link  className="text-white">
                {" "}
                {/* Link bileşeni kullanıldı */}
                Özel Yazılım
              </Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link  className="text-white">
            {" "}
            {/* Link bileşeni kullanıldı */}
            <img
              className="d-block w-full object-cover border"
              src={Transition3}
              alt="Third Slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>
              <Link  className="text-white">
                {" "}
                {/* Link bileşeni kullanıldı */}
                Özel Yazılım
              </Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

 
<div>
      {services()}
    </div>

      <br />
      <Footer />
    </>
  );
});

export default ozelyazilim;




  /*  

<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              />

            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    MÜŞAVIR E-DESTEK 
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Verdiğimiz hizmetler geniş bir yelpazeyi kapsar.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Müşavir e-destek sayesinde işletmenizin finansal süreçlerini
                  uzman danışmanlarımızın gözetiminde etkin yönetebilirsiniz.
                  Firma web paketleri ile modern, etkileyici ve kullanıcı dostu
                  web siteleri tasarlayarak çevrimiçi varlığınızı
                  güçlendirebilirsiniz. Özel yazılım çözümleri ile iş
                  süreçlerinizi özelleştirilmiş ve verimli bir şekilde
                  yönetebilir, rekabette öne çıkabilirsiniz. Size özel çözümler
                  sunarak işinizi daha ileri taşımayı hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>  
        </section>




  <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Kişisel Web Sitesi Sahibi Olun!
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Kişisel web ile görünür olun, kurumsal e-postalarla
              profesyonelliği yakalayın, E-Destek ile hizmeti kesintisiz sunun!
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Kişisel Web Sitesi Sahibi Olun!
                </span>
              </div>
            </div>
   
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Mükellefleriniz ve tüm Dünya size ulaşabilsin.{" "}
                </span>
              </div>
            </div>

            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Kurumsal Mail Adresi Oluşturun!
                </span>
              </div>
            </div>
       
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  E-Destek Sistemi ile Hizmetinizi Kesintisiz Sunun!
                </span>
              </div>
            </div>
     
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Tüm e-posta iletişiminizi kontrol ve takip edin.
                </span>
              </div>
            </div>
    
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Kendinize ve elemanlarınıza kurumsal e-posta adresleri
                  oluşturun
                </span>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            HEMEN TEKLİF AL!
          </button>
        </div>
      </section>
	

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Firma Web Paketleri:
              <br className="hidden lg:inline-block" />
              Dijital İş Dünyasında Öne Çıkın!
            </h1>
            <p className="mb-8 leading-relaxed">
              İşletmenizi çevrimiçi platformda en iyi şekilde temsil etmek için
              Firma Web Paketleri ideal bir çözümdür. Modern tasarım, kullanıcı
              dostu arayüz ve özelleştirilebilir içerik ile müşterilerinizi
              etkileyin. Profesyonel web sitesi, marka itibarınızı artırırken,
              ürün ve hizmetlerinizi geniş kitlelere tanıtmanın kapılarını
              aralar. Firma Web Paketleri avantajları: 1. **Güçlü Online
              Varlık:** İşletmenizi sanal dünyada temsil ederek 7/24
              erişilebilirliğin keyfini yaşayın. 2. **Modern Tasarım:** Göz
              alıcı tasarım ve düzenlerle ziyaretçilerin ilgisini çekin,
              profesyonel bir imaj sergileyin. 3. **SEO Uyumlu:** Arama
              motorlarına uyumlu tasarım ve içerik ile sıralamalarda üst
              sıralarda yer alın. 4. **Mobil Uyumlu:** Mobil cihazlara uyumlu
              tasarım ile her platformda sorunsuz görünüm sunun. 5.
              **Özelleştirilebilir İçerik:** İçerik yönetim sistemi ile kolayca
              içeriği güncelleyin, kampanyalarınızı duyurun. 6. **Hızlı
              Yüklenme:** Hızlı yüklenen sayfalar ziyaretçilerin sitede daha
              fazla vakit geçirmesini sağlar. Firma Web Paketleri ile
              işletmenizi dijital dünyada güçlendirin, rekabet avantajı elde
              edin!
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Özel Yazılım:
              <br className="hidden lg:inline-block" />
              Kontrolü Ellinizde Tutun, İçeriği Yönlendirin!
            </h1>
            <p className="mb-8 leading-relaxed">
              Gelişmiş altyapımızla, web sitenizin kontrolünü tamamen size
              veriyoruz. Profesyonel ekibimiz tarafından tasarlanan web
              sayfanıza yönetim paneli entegre ederek, içeriği istediğiniz zaman
              kolayca değiştirme özgürlüğü sunuyoruz. Sitenizin yönetimini
              elinize alın, içeriği siz şekillendirin. Ayrıca, kısıtlanmış
              yönetim paneli ile çalışanlarınızın da belirli alanlarda
              değişiklik yapabilmesine olanak tanıyoruz. Böylece işbirliğini
              artırarak sitenizin güncel ve dinamik kalmasını sağlayabilirsiniz.
              Özel yazılım ile dijital varlığınızı istediğiniz gibi yönlendirin,
              iş süreçlerinizi optimize edin. Teknolojiyi işinize avantaj
              sağlamak için kullanın.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                HEMEN TEKLİF AL
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <a
                  href="tel:+903522312536"
                  className="text-black hover:text-blue-600"
                >
                  TELEFON : +90 (352) 231 25 36
                </a>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
  */





