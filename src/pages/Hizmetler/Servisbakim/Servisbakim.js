import React from "react";
import XTopbar from "../../../components/Topbar/xTopbar";
import ANavbar from "../../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../../images/Transition/c14.png";
import Transition2 from "../../../images/Transition/c15.png";
import Transition3 from "../../../images/Transition/c16.png";
import Footer from "../../../components/Footer/Footer";

function Servisbakim() {
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
                Servis Bakım Ve Onarım
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
                Servis Bakım Ve Onarım
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
                Servis Bakım Ve Onarım
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
                    Güvenilir Servis Bakımı, <br /> Onarım ve <br /> Veri
                    Kurtarma Hizmetleri
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mb-2">
                      HEMEN TEKLİF AL
                    </button>
                    <button className=" ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      <a
                        href="tel:+903522312536"
                        className="text-black hover:text-blue-600"
                      >
                        TELEFON : +90 (352) 231 25 36
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Günümüzde teknoloji, hayatımızın vazgeçilmez bir parçası
                  haline geldi. Cihazlarımız, işimizi yapmaktan eğlenceye kadar
                  pek çok alanda bize yardımcı oluyor. Ancak bu hızlı teknolojik
                  değişim ve kullanım, cihazlarımızın zaman içinde performans
                  kaybına uğramasına, arızaların ortaya çıkmasına ve hatta veri
                  kayıplarına neden olabiliyor. İşte bu noktada biz, profesyonel
                  servis, bakım, onarım ve veri kurtarma hizmetleri ile
                  yanınızdayız.
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
              Veri Kurtarma Uzmanları: Kayıplarınızı Kurtarmak İçin Buradayız
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Profesyonel Veri Kurtarma: Verilerinizi kurtarmak adına otomatik
              yöntemlerin yetersiz kaldığı, karmaşık durumlar bizim iş
              alanımızdır.
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
                  Uzmanlık Alanımız: Veri kurtarma sürecinde otomatik
                  yöntemlerin yetersiz kaldığı karmaşık durumlar bizim iş
                  alanımızdır.
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
                  Zorlu Durumlar: Karmaşık veri kaybı durumlarında
                  uzmanlığımızla yanınızdayız.
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
                  Veri Güvencesi: Verilerinizin güvenliği ve gizliliği en üst
                  düzeyde korunur.
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
                  Doğru Yaklaşım: Veri kaybını önlemek ve verilerinizi en iyi
                  şekilde kurtarmak için profesyonel yaklaşımlar sunuyoruz.
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
                  Eğitimli Ekip: Deneyimli ekibimiz, özelleştirilmiş ve etkili
                  veri kurtarma çözümleri sunar.
                </span>
              </div>
            </div>
            {/* Feature 6 */}
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
                  Hızlı ve Güvenilir Hizmet: Verilerinizi hızlı, güvenilir ve
                  profesyonel bir şekilde kurtarmak için buradayız.
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
              Servis ve Bakım:
              <br className="hidden lg:inline-block" />

            </h1>
            <p className="mb-8 leading-relaxed">
              Cihazlarınızın performansını en üst düzeye çıkararak sorunsuz bir
              deneyim sağlamak amacıyla kapsamlı servis ve bakım hizmetleri
              sunuyoruz. Size özel çözümlerimiz ile cihazlarınızın verimini
              artırıyoruz. Profesyonel Ekip: Deneyimli teknisyenlerimiz,
              cihazlarınıza en uygun bakımı ve onarımı sağlar. Her marka ve
              modeldeki cihazlara özelleştirilmiş çözümler sunuyoruz. Rutin
              Bakımlar: Cihazlarınızın uzun ömürlü olmasını sağlamak için
              periyodik bakım hizmetleri sunuyoruz. Bu sayede olası sorunları
              erken teşhis ederek daha büyük problemlerin önüne geçiyoruz. İleri
              Teşhis: Gelişmiş teşhis ekipmanları kullanarak cihazlarınızın
              içsel ve dışsal sorunlarını tespit ediyoruz. Bu sayede cihazınızın
              daha verimli çalışmasını sağlıyoruz. Uzun Ömürlü Performans:
              Profesyonel bakım ve onarım ile cihazlarınızın ömrünü uzatıyoruz.
              Performansını en üst düzeye çıkararak daha verimli sonuçlar elde
              etmenizi sağlıyoruz. Hızlı ve Güvenilir Hizmet: Cihazlarınızı en
              kısa sürede çalışır duruma getirerek kesintisiz kullanımınıza
              devam etmenizi sağlıyoruz. Müşteri Memnuniyeti: Amacımız,
              müşterilerimize en iyi servis ve bakım deneyimini sunarak
              cihazlarınızın sorunsuz ve uzun ömürlü çalışmasını sağlamaktır.
              Cihazlarınıza özel bakım planları ile size özel çözümler
              sunuyoruz. Teknolojik ihtiyaçlarınıza en iyi şekilde cevap vermek
              ve cihazlarınızın performansını artırmak için bize
              güvenebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Onarım Hizmeti Sağlıyoruz!
              <br className="hidden lg:inline-block" />
            
            </h1>
            <p className="mb-8 leading-relaxed">
              Geniş Kapsam: Bilgisayarlar, Server elektronik
              cihazlar ve daha fazlası. Hangi cihaz olursa olsun, her tür sorun
              için eksiksiz bir çözüm sunuyoruz. Fiziksel Hasarlar: Kırık
              ekranlar, su hasarı gibi fiziksel sorunlarınızı hızlıca çözüme
              kavuşturuyoruz. Orijinal parçalarla yapılan onarımlarla cihazınızı
              ilk günkü gibi kullanabilirsiniz. Donanım Arızaları: Teknolojik
              bileşenlerde yaşanan arızaları profesyonelce teşhis ediyoruz.
              Uzman ekibimiz ile en karmaşık donanım problemlerini çözerek
              cihazınızın işlevini yeniden kazandırıyoruz. Yazılım Problemleri:
              Virüs bulaşmış sistemler, yazılım çökmeleri, güncelleme sorunları
              gibi yazılımsal sorunları hızlı bir şekilde gideriyoruz.
              Cihazınızı güvenli ve verimli bir şekilde kullanmanızı sağlıyoruz.
              Hızlı Çözümler: Sorunlarınıza en kısa sürede müdahale ediyor ve
              cihazlarınızı eski işlevine döndürerek size zaman kazandırıyoruz.
              Müşteri Odaklı Hizmet: Müşteri memnuniyetini ön planda tutuyoruz.
              Size özel çözümler sunarak cihazlarınızı en kısa sürede çalışır
              duruma getiriyoruz. Teknolojik sorunlarla uğraşmak zorunda
              kalmadan, uzman ekibimiz sayesinde cihazlarınızı güvenle bize
              teslim edebilirsiniz. İhtiyacınıza uygun hızlı ve güvenilir onarım
              hizmeti için bize başvurabilirsiniz.
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

      <br />
      <Footer />
    </>
  );
}

export default Servisbakim;
