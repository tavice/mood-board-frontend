import React from "react";
import { Route, Routes } from "react-router-dom";

// import components
import MoodBoardContainer from "./components/MoodBoardContainer";
import UploadButton from "./components/UploadButton";




function App() {
const URL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><UploadButton URL={URL} /><MoodBoardContainer URL={URL}/></>} />
        <Route path="/upload" element={<UploadButton URL={URL} />} />
        <Route path="/moodboards" element={<MoodBoardContainer URL={URL}/>} />
      </Routes>
    </div>
  );
}

export default App;
