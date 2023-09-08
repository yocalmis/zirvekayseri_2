import Anasayfa from "../pages/Anasayfa/Anasayfa";
import Kurumsal from "../pages/Kurumsal/Kurumsal";
import Personeltemin from "../pages/Personeltemin/Personeltemin";
import Ozelyazilim from "../pages/Hizmetler/Ozelyazilim/Ozelyazilim";
import Servisbakim from "../pages/Hizmetler/Servisbakim/Servisbakim";
import Zirveurunleri from "../pages/Hizmetler/Zirveurunleri/Zirveurunleri";
import Eimza from "../pages/Eimza/Eimza";
import Iletisim from "../pages/Iletisim/Iletisim";
import Kampanyadetay1 from "../pages/KampanyaDetay/CampanyDetails";
import UrunDetay from "../pages/UrunDetay/Urundetay";

const Routesx = [
  {
    path: "/",
    element: <Anasayfa />,
  },
  {
    path: "/hakkimizda",
    element: <Kurumsal />,
  },
  {
    path: "/ik",
    element: <Personeltemin />,
  },
  {
    path: "/e-imza",
    element: <Eimza />,
  },
  {
    path: "/iletisim",
    element: <Iletisim />,
  },
  {
    path: "/ozel-yazilim",
    element: <Ozelyazilim />,
  },
  {
    path: "/servis-bakim-ve-onarim",
    element: <Servisbakim />,
  },
  {
    path: "/zirve-urunleri",
    element: <Zirveurunleri />,
  },
  {
    path: "/kampanya-detay",
    element: <Kampanyadetay1 />,
  },
  {
    path: "/urundetay",
    element: <UrunDetay />,
  },
];

export default Routesx;
