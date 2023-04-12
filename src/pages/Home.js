import React from "react";
import About from "../components/About";
import AddOns from "../components/AddOns";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurServices from "../components/OurServices";
import HowWeAre from "../components/HowWeAre";
import Clients from "../components/Clients";
import MessangerChatbot from "../components/chatbox/MessangerChatbot";
import "../index.css"
import Testimonals from "../components/Testimonals";
import FormModal from "../components/modal/FormModal";
import Modall from "../components/Modall";
import ChatModal from "../components/ChatModal";


function Home() {
  return (
    <div className="font-Poppins">

      {/* <MessangerChatbot /> */}
      {/* <div style={{position:"fixed",bottom:"60px",right:"60px",zIndex:"1"}}>
          <ChatModal />

      </div> */}
      {/* <Header /> */}
      <Carousel />
      {/* <FormModal/> */}
<Modall/>
      <About />
      <hr />
      <OurServices />
      <hr />
      <AddOns />
      <hr />
      <Testimonals />
      <hr />

      <HowWeAre />
      <hr />

      {/* <Clients /> */}
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
