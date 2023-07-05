import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import ThankU from "./pages/ThankU/ThankU";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FormModal from "./components/modal/FormModal";
import Modall from "./components/Modall"
import ChatModal from "./components/ChatModal";
import Blogs from "./pages/Blogs/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogsMap from "./pages/Blogs/BlogsMap";
import Team from "./pages/Team/Team";
import TeamMap from "./pages/Team/TeamMap";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    // setShowModal(true);
    window.scrollTo(0, 0);
  }, [pathname]);

  

  return (
    <div className="App">
      <Header/>
      <div style={{position:"fixed",bottom:"10px",right:"10px",zIndex:"1"}}>
          <ChatModal />
      </div>
      {showModal ? <Modall />:(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/thankyou" element={<ThankU />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/blogs" element={<BlogsMap />} />
        <Route path="/team" element={<TeamMap />} />
      </Routes>
      )}
      <Footer/>
    </div>
  );
}

export default App;
