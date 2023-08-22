import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from "../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../images/Transition/c14.png";
import Transition2 from "../../images/Transition/c15.png";
import Transition3 from "../../images/Transition/c16.png";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";


const plans = [
  {
    title: '1 Yıllık',
    price: '849,00₺',
    features: ['Nitelikli Elektronik İmza Sertifikası', 'Akıllı Kart', 'Akıllı Kart Okuyucu'],
  },
  {
    title: '2 yıllık',
    price: '1099,00₺',
    features: ['Nitelikli Elektronik İmza Sertifikası', 'Akıllı Kart', 'Akıllı Kart Okuyucu'],
  },
  {
    title: '3 yıllık',
    price: '1349,00₺',
    features: ['Nitelikli Elektronik İmza Sertifikası', 'Akıllı Kart', 'Akıllı Kart Okuyucu'],
  },
];

const updatedPlans = [
  {
    title: '1 Yıllık - Yenileme',
    price: '699,00₺',
    features: ['Nitelikli Elektronik İmza Sertifikası', 'Akıllı Kart'],
  },
  {
    title: '2 yıllık - Yenileme',
    price: '899,00₺',
    features: ['Nitelikli Elektronik İmza Sertifikası', 'Akıllı Kart'],
  },
  {
    title: '3 yıllık - Yenileme',
    price: '1099,00₺',
    features: ['Nitelikli Elektronik İmza Sertifikası', 'Akıllı Kart'],
  },
];

function Eimza() {
  const [selectedOption, setSelectedOption] = useState('firstPurchase');

  return (
    <>
      <XTopbar />
      <ANavbar />

      <Carousel fade>
        <Carousel.Item>
          <a href="#/" className="text-white">
            <img
              className="d-block w-full object-cover shadow text-white"
              src={Transition1}
              alt="First Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a href="#/" className="text-white">
                E-imza
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#/" className="text-white">
            <img
              className="d-block w-full object-cover shadow"
              src={Transition2}
              alt="Second Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a href="#/" className="text-white">
                E-imza
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#/" className="text-white">
            <img
              className="d-block w-full object-cover border"
              src={Transition3}
              alt="Third Slide"
            />
          </a>
          <Carousel.Caption>
            <h3>
              <a href="#/" className="text-white">
                E-imza
              </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
              <div className="sm:w-3/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1>E-imza Nedir?</h1>
                <p className=" text-lg mb-4">
                  Nitelikli Elektronik Sertifika'ya (NES) dayanılarak
                  oluşturulan elektronik imza (e-İmza) güvenli elektronik
                  imzadır. 5070 sayılı Elektronik İmza Kanunu uyarınca, "güvenli
                  elektronik imza, elle atılan imzayla aynı hukuki sonucu
                  doğurur".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
  <div className="flex justify-center mb-20">
    <button
      onClick={() => setSelectedOption('firstPurchase')}
      className={`${
        selectedOption === 'firstPurchase' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
      } py-2 px-4 rounded m-1`}
    >
      İlk Satın Alma
    </button>
    <button
      onClick={() => setSelectedOption('renewal')}
      className={`${
        selectedOption === 'renewal' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
      } py-2 px-4 rounded m-1`}
    >
      Yenileme
    </button>
  </div>
    <div className="flex flex-wrap -m-4">
      {selectedOption === 'firstPurchase' ? (
        plans.map((plan, index) => (
          <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan.title}</h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{plan.price}</h1>
              {plan.features.map((feature, featureIndex) => (
                <p key={featureIndex} className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-200 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>{feature}
                </p>
              ))}
              <button className="flex items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">SATIN AL!
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">KDV DAHİL FİYAT!</p>
            </div>
          </div>
        ))
      ) : (
        updatedPlans.map((plan, index) => (
          <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan.title}</h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{plan.price}</h1>
              {plan.features.map((feature, featureIndex) => (
                <p key={featureIndex} className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-200 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>{feature}
                </p>
              ))}
              <button className="flex items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">SATIN AL!
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">KDV DAHİL FİYAT!</p>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</section>

      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">

            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {/* Feature 1 */}
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
                  KDV oranı %20'dir.
                </span>
              </div>
            </div>
            {/* Feature 2 */}
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
                  E-İmza paketlerine nitelikli elektronik sertifika (e-İmza
                  sertifikası), akıllı kart, akıllı kart okuyucusu ve PALMA
                  (Akıllı Kart Yönetim Yazılımı) dahildir.
                </span>
              </div>
            </div>
            {/* Feature 3 */}
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
                  E-İmza yenileme paketlerinde akıllı kart okuyucu pakete dahil
                  değildir.
                </span>
              </div>
            </div>
            {/* Feature 4 */}
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
                  Belirtilen fiyatlar, ürünlerimizin perakende satış fiyatıdır.
                </span>
              </div>
            </div>
            {/* Feature 5 */}
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
                  1 ay içinde teslim alınmayan e-İmza sertifikaları iptal edilir
                  ve ödeme iadesi yapılmaz.
                </span>
              </div>
            </div>
            {/* Feature 6 */}
          </div>
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
            <p className="title-font  text-2xl mb-4 font-medium text-gray-900">
              e-İmza yenileme başvurusu kullanıcı tarafından ve mevcut e-İmza
              sertifikası bilgisayara takılı iken PALMA (Akıllı Kart Yönetim
              Yazılımı)’ndan online olarak gerçekleştirilir.
              <br className="hidden lg:inline-block" />
              E-İmza sertifikasının süre sonu kullanıcıya 30 ve 10 gün kala
              kayıtlı e-posta adresine gönderilen bilgilendirme e-postaları ile
              hatırlatılır.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              YENİLEME BAŞVURUSU :
              <br className="hidden lg:inline-block" />
              
            </h1>
            <p className="mb-8 leading-relaxed">
              Yenileme başvurusu en erken mevcut e-İmza sertifikasının süre
              sonuna 30 gün kala yapılabilir. Sertifika süresi sona eren
              e-imzalar ile yenileme başvurusu yapılamaz.
            </p>
            <div className="flex justify-center">
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

      <br />
      <Footer />
    </>
  );
}

export default Eimza;
