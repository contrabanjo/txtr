import React, {useState} from "react";
import ReactDOM from "react-dom";

import HeroBanner from "./components/heroBanner.jsx"
import NavBar from "./components/navBar.jsx";
import ContactInfo from "./components/contactInfo.jsx"
import AboutUs from "./components/aboutUs.jsx";
import SizedPhotoViewer from "./components/carousel/sizedPhotoViewer.jsx"
import Calendar from "./components/calendar/calendar.jsx";


const App = () => {
  const [page, setPage] = useState("calendar")

  function renderPage(){
    switch(page){
      case 'home':
        return <ContactInfo/>
      case 'about':
        return <AboutUs/>
      case 'calendar':
        return <Calendar/>
      case 'pictures':
        return <SizedPhotoViewer/>
      default:
        return <ContactInfo/>
    }
  }

  return <div className="container">
     <HeroBanner src="./images/banner.jpg"/>
     <NavBar setPage={setPage}/>
     <hr/>
     {renderPage()}
    </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));