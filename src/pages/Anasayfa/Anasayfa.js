import XTopbar from "../../components/Topbar/xTopbar";
import ANavbar from '../../components/Navbar/aNavbar';
import XHeader from '../../components/Header/xHeader';
import Who from '../../components/Who/who';
import Campany from '../../components/Campany/Campany';
import Events from '../../components/Events/Event';
import Services from '../../components/Services/Services';
import Ref from '../../components/Refarence/Ref';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import React from 'react'
/*import TimerView from "./TimerView" <TimerView  />*/
	
function Anasayfa() {
  return (
    <>
      <XTopbar />
      <ANavbar />
      <XHeader />
      <Who/>
      <Campany/>
      <Events/>
      <Services/>
      <Ref/>
      <Content/>
      <Footer/>
    </>
  )
}

export default Anasayfa