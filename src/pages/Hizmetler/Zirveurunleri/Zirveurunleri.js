import React from "react";
import XTopbar from "../../../components/Topbar/xTopbar";
import ANavbar from "../../../components/Navbar/aNavbar";
import Carousel from "react-bootstrap/Carousel";
import Transition1 from "../../../images/Transition/c14.png";
import Transition2 from "../../../images/Transition/c15.png";
import Transition3 from "../../../images/Transition/c16.png";
import Footer from "../../../components/Footer/Footer";

function Zirveurunleri() {
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
                Zirve Ürünleri
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
                Zirve Ürünleri
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
                Zirve Ürünleri
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
                    İşinizi Kolaylaştırın <br /> Tecrübeli Ekip <br />{" "}
                    Aradığınız Çözümler Bir Arada
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Geniş ürün portföyü ile ihtiyaçlarınıza uygun olarak
                    geliştirilmiş çözümlerle tanışın.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Zirve Yazılım Muhasebe Programı, işletmelerin finansal
                  işlemlerini kolaylaştırmak ve verimliliği artırmak için
                  tasarlanmış bir çözümdür. Kapsamlı özellikleri ve kullanıcı
                  dostu arayüzü ile işletmelerin muhasebe süreçlerini etkili bir
                  şekilde yönetmelerine yardımcı olur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-1 py-1 mx-auto">
          <div className="h-1 bg-gray-200 rounded overflow-hidden mb-3">
            <div className="w-75 h-full bg-blue-500"></div>
          </div>
          <div className="flex flex-col text-center w-full mb-3">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Ürünlerimiz
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Zirve ürünleri ile, işletmenizin ön muhasebe süreçlerini kolayca
              yönetin, zamandan ve iş gücünden tasarruf edin.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_ticari_cf0043f5ee.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Zirve Ticari
                  </h2>
                  <p className="text-gray-500">
                    Zirve Ticari ile Ön Muhasebe süreçlerinizi pratik ve hızlı
                    bir şekilde yönetin.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_uretim_6c8c99446f.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Zirve Üretim
                  </h2>
                  <p className="text-gray-500">
                    Firmanızın tüm üretim sürecini ticari ve genel muhasebe
                    bölümüyle entegre yönetin.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_finansman_132bf406d6.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Zirve Finansman
                  </h2>
                  <p className="text-gray-500">
                    Zirve Finansman ile genel muhasebe ve ön muhasebe
                    süreçlerinizi birlikte yönetin.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_muhasebe_f8e6c37bae.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Zirve Muhasebe
                  </h2>
                  <p className="text-gray-500">
                    Genel Muhasebe kayıtlarınızı hem pratik, hem de detaylı
                    olarak takip edin.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_bordro_27c5cfa22c.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Zirve Bordro
                  </h2>
                  <p className="text-gray-500">
                    Zirve Bordro ile çalışanlarınızın bordro / personel
                    kayıtlarını, işe giriş çıkış ve bildirge süreçlerini
                    yönetmek çok pratik.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_e-fatura_d4e2165cca.svg"
                />
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_e-arsiv-fatura_176f1c084c.svg"
                />
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_e-irsaliye_51ce365535.svg"
                />
                <div className="flex-grow">
                  <p className="text-gray-500">
                    Zirve Ticari, Finansman ve Portal ile e-Fatura, e-Arşiv,
                    e-İrsaliye faturalarınızı son kullanıcılara kolayca
                    gönderin.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/zirve_e-smm_1768ed1b1d.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    e-SMM
                  </h2>
                  <p className="text-gray-500">
                    Serbest meslek makbuzlarınızı dijital ortamda kolayca
                    yönetin, tahsilatlarınızı hızlandırın.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 mr-4"
                  src="https://websiteapi.zirveyazilim.net/uploads/e-Mustahsil_44f5310a9b.svg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    e-Müstahsil
                  </h2>
                  <p className="text-gray-500">
                    Müstahsil makbuzlarınızı Zirve ile elektronik ortamda
                    hızlıca oluşturun ve raporlayın
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Zirve Ürünleri
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Ürün bilgileri
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
                  Kapsamlı Muhasebe İşlemleri: Gelir-gider takibi, fatura
                  oluşturma, cari hesap yönetimi, banka işlemleri ve daha
                  fazlasını tek bir platformda gerçekleştirme imkanı sunar.
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
                  Kullanıcı Dostu Arayüz: Kolay anlaşılır arayüzü sayesinde
                  kullanıcılar için hızlı ve sorunsuz bir deneyim sağlar.
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
                  Özelleştirilebilir Raporlar: İşletmenizin finansal durumunu
                  takip etmek için ihtiyacınıza uygun raporlar oluşturabilir ve
                  analiz edebilirsiniz.
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
                  Cari Hesap Yönetimi: Tedarikçi ve müşteri hesaplarını etkili
                  bir şekilde izleyebilir, alacak ve borç takibini
                  yapabilirsiniz
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
                  Güvenlik ve Veri Koruma: Hassas finansal verilerin güvenliği
                  için gelişmiş güvenlik önlemleri alınmıştır.
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
                  Hızlı ve Doğru İşlem: Otomatik hesaplamalar ve entegrasyonlar
                  ile hataları minimize ederek işlem süreçlerini hızlandırır.
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
              Zirve Programları ile Bir Adım Önde Olun!
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Zirve Yazılım Muhasebe Programı, işletmelerin finansal yönetimini
              kolaylaştırmak ve optimize etmek için özel olarak tasarlanmış bir
              çözümdür. İşletmenizin büyüme hedeflerine ulaşmasına yardımcı
              olacak bir dizi özellik sunmaktadır. Entegre Modüller: Gelir-gider
              takibi, vergi hesaplamaları, mali tablo oluşturma ve daha birçok
              temel muhasebe işlemi, kullanıcı dostu bir arayüzle entegre bir
              şekilde sunulur. Özelleştirilebilir Raporlama: İhtiyaçlarınıza
              uygun raporlar oluşturarak işletmenizin finansal durumunu anlamak
              ve analiz etmek daha kolay hale gelir. Cari Hesap Yönetimi:
              Tedarikçi ve müşteri hesaplarınızı yönetmek, alacak ve borç takibi
              yapmak için etkili bir sistem sunar. Banka Entegrasyonu: Banka
              hareketlerinizi takip ederek finansal kontrolden ödün vermezsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hızlı İşlemler İle işlemlerinizi ve vakitlerinizi değerlendirin.
              <br className="hidden lg:inline-block" />

            </h1>
            <p className="mb-8 leading-relaxed">
              Veri Güvenliği: Hassas finansal verilerinizin güvenliği için güçlü
              güvenlik önlemleri alınmıştır. Kullanıcı Dostu Arayüz: Teknik
              bilgiye ihtiyaç duymadan kolayca kullanabileceğiniz bir arayüz ile
              işlem yapabilirsiniz. Hız ve Doğruluk: Otomatik hesaplamalar ve
              veri entegrasyonu, hataları azaltarak işlem hızını artırır.
              Sürekli Destek: Teknik destek ekibi, kullanıcılarımıza her türlü
              soru ve ihtiyaçlarına hızlıca yanıt verir.
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

export default Zirveurunleri;
