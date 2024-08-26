
import { useState,useEffect } from 'react';
import { MENU_API } from '../hooks/Apicalling';

const UserCusotomhook = (resId)=>{
    const [resInfo, setInfo] = useState(null);
    useEffect(() => {
        fetchResturant();
      }, []);
      const fetchResturant = async ()=>{
        try {
            const data = await fetch(MENU_API + resId)
            const response = await data.json();
            setInfo(response?.data);

        } catch (error) {
            
        }
     
      }
    return resInfo
}
export default UserCusotomhook;