import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ThankU from "./pages/ThankU/ThankU";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Modall from "./components/Modall"
// import ChatModal from "./components/ChatModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogsMap from "./pages/Blogs/BlogsMap";
import TeamMap from "./pages/Team/TeamMap";
import Register from "./pages/Blogs/Register";
import Login from "./pages/Blogs/Login";
import Blogs from "./pages/Blogs/Blogs";
import Layout from "./pages/Blogs/Layout";
import CreatePost from "./pages/Blogs/CreatePost";
import PostPg from "./pages/Blogs/PostPg";
import Edit from "./pages/Blogs/Edit";
import { UserContextProvider } from "./pages/Blogs/UserContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    // setShowModal(true);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      {/* <div style={{position:"fixed",bottom:"10px",right:"10px",zIndex:"1"}}>
          <ChatModal />
      </div> */}
      {showModal ? <Modall /> : (
        <UserContextProvider>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/privacy-policy' exact Component={PrivacyPolicy} />
            <Route path='/thankyou' exact Component={ThankU} />
            <Route path='/blog' exact Component={()=>{
              return (
                <>
                <BlogsMap/>
                <Layout/>
                </>
              )              
            }}>
              <Route index Component={Blogs} />
              <Route path='login' exact Component={Login} />
              <Route path='register' exact Component={Register} />
              <Route path='create' exact Component={CreatePost} />
              <Route path='post/:id' exact Component={PostPg} />
              <Route path='edit/:id' exact Component={Edit} />
            </Route>
            <Route path='/team' exact Component={TeamMap} />
            <Route path='/*' Component={PageNotFound} />
          </Routes>
        </UserContextProvider>
      )}
      <Footer />
    </div>
  );
}

export default App;
