import { useEffect, useState } from "react";
import Shimmer from '../component/Shimmer-ui';
import { MENU_API } from '../utils/Apicalling';
import { useParams } from "react-router-dom";
import styles from './Menu.module.css';


const ResturantMeny = () => {
  const [resInfo, setInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchResturant();
  }, []);

  const fetchResturant = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const response = await data.json();
      setInfo(response?.data);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];














  return (
    <div className="menu">
    <h1>{name}</h1>
    <h2>{cuisines?.join(", ")} - {costForTwoMessage}</h2>
    <h2>Menu</h2>
    <ul className={styles.menuBar}>
      {itemCards.map((item) => (
        <li key={item.card.info.id} className={styles.menuItem}>
          <span className={styles.menuItemName}>{item.card.info.name}</span>
          <span className={styles.menuItemPrice}>
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ResturantMeny;
