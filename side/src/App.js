/* App.js */
import {Route, Routes} from "react-router-dom";     // path 를 통해 URL 을 분기 가능, 중첩 가능(=중첩 라우팅)
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
// import React from "react";       // 캔슬 가능

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
    </Routes>
  );
}

export default App;
