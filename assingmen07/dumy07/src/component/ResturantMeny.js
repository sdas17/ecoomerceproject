import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Shimmer from '../component/Shimmer-ui';
import { MENU_API } from '../utils/Apicalling';
import styles from './Menu.module.css';
import UserCusotomhook from "../utils/UserCusotmhook";

const ResturantMeny = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const { resId } = useParams();
  const navigate = useNavigate();
const resInfo =UserCusotomhook(resId);




  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

  const toggleAccordion = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={handleBack} className={styles.backButton}>
        ← Back
      </button>
      <div className={styles.header}>
        <h1 className={styles.restaurantName}>{name}</h1>
        <h2 className={styles.restaurantDetails}>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h2>
      </div>
      <h2 className={styles.menuTitle}>Menu</h2>
      <ul className={styles.menuBar}>
        {itemCards.map((item) => (
          <li key={item.card.info.id} className={styles.menuItem}>
            <div
              className={styles.menuItemHeader}
              onClick={() => toggleAccordion(item.card.info.id)}
            >
              <span className={styles.menuItemName}>{item.card.info.name}</span>
              <span className={styles.menuItemPrice}>
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
              <span className={styles.accordionIcon}>
                {expandedItems[item.card.info.id] ? "▲" : "▼"}
              </span>
            </div>

            {expandedItems[item.card.info.id] && (
              <div className={styles.menuItemDetails}>
                <p>{item.card.info.description || "No description available"}</p>
                <p>Calories: {item.card.info.calories || "N/A"}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMeny;
