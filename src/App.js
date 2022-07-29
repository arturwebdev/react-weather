import MonthStatistics from "./pages/MonthStatistics/components/MonthStatistics";
import React, {useEffect} from "react";
import {Route, Routes} from 'react-router'
import Home from "./pages/Home/Home";
import Header from "./shared/Header/Header";
// import Popup from "./shared/Header/Popup/Popup";
// import store from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { fatchData, selectData } from "./store/slices/data/data";
function App() {
  const dispatch = useDispatch()
  const data = useSelector(selectData)
  useEffect(() => {
    if (!data.countres.length) {
      dispatch(fatchData('Yerevan'))
    }
  }, []);
  return (
    <div className="global-container">
      {data.countres.length &&
    <div className="container">

<Header  />
    <Routes>
  
      <Route path="/" element={<Home />}   />
      <Route path="/Month-Statistics" element={<MonthStatistics />} />

       </Routes>
       </div>}
    </div>
  );
}

export default App;
