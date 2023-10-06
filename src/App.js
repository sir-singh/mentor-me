import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Components/Home/Home";
import Preview from "./Components/Preview/Preview";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Engage from "./Components/Engage/Engage";
import EngageResponse from "./Components/Engage/EngageResponse";
import RegisterMentee from "./Components/Registration/RegisterMentee";
// import New from "./Components/Registration/New";

function App() {

    const  onRegCallback = (data) => {
        const { skill, userId} = data;
        window.location.href = "/home?userId="+ userId + "&skill=" + skill;

    }

    const  onPrevCallBack = (data) => {
        const {userId} = data;
        console.log(data)
        window.location.href = "/preview?userId="+ userId;
    }

    const [load, upadateLoad] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const handleRegistration = (mentorsData) => {
        // Handle the mentors' data received from the registration
        console.log("Mentors Data:", mentorsData);

        // You can navigate to the Home component or perform any other actions here
    };

  return (
      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path="/" element={<RegisterMentee onRegistration={onRegCallback}/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/engage" element={<Engage />} />
              <Route path="/preview" element={<Preview onPreview={onPrevCallBack}/>} />
              <Route path="/engageMentor" element={<EngageResponse />} />
              {/*<Route path="/new" element={<New />} />*/}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
