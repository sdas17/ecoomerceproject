import Header from './component/Header';
import Footer from './component/Footer';
import './index.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UseDumy from './hooks/UseDumy';
import {Provider} from "react-redux";
import appStore from './hooks/appStore';

function App() {
  const [userInfor,setuserinfo]=useState()
  useEffect(()=>{
    const ProfileDetaild ={
      data:"karan"
    }
    setuserinfo(ProfileDetaild.data)
    

  },[])
  return (
    //if u pass data then provider 
    <>
    <Provider store={appStore}>
    <UseDumy.Provider value={{firstName:userInfor,setuserinfo}}>
      <Header/>
      <Outlet/>
      {Footer()}
    </UseDumy.Provider>
    </Provider>
    
   
   
    </>
  );
}


export default App;