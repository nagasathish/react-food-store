import { useEffect, useState } from "react";
import {
  CLOUDINARY_URL,
  RESTAURANT_MENU_URL,
  RESTAURANT_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantData(id);
  }, []);

  const getRestaurantData = async (restaurantId) => {
    const data = await fetch(RESTAURANT_URL + restaurantId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) {
    return <Shimmer />;
  } else {
    const {
      name,
      cuisines,
      cloudinaryImageId,
      costForTwoMessage,
      areaName,
      sla,
    } = resInfo?.cards[0]?.card?.card?.info;

    const itemCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    console.log(itemCards);
    return (
      <div className="menu">
        <img
          className="res-menu-logo"
          src={CLOUDINARY_URL + cloudinaryImageId}
        />
        <h1>{name}</h1>
        <div>{cuisines?.join(", ")}</div>
        <div>{costForTwoMessage}</div>
        <div>{areaName}</div>
        <div>{sla?.slaString}</div>
        <div className="items-list">
          {itemCards?.map((item, index) => {
            const itemDetails = item.card?.info;
            return (
              <div key={index} className="item-card">
                <img
                  className="item-image"
                  src={RESTAURANT_MENU_URL + itemDetails?.imageId}
                />
                <div>{itemDetails.name}</div>
                <strong>₹{itemDetails?.price / 100}</strong>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
