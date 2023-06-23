import { useEffect, useState } from "react";
import {
  CLOUDINARY_URL,
  RESTAURANT_MENU_URL,
  RESTAURANT_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

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

    // const itemCards =
    //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards;

    // const itemProductCards =
    //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
    //     (item) => item.card.card.type == "CATEGORY_TYPE_RECOMMENDED"
    //   )?.card?.card?.itemCards;
    // console.log(itemProductCards);

    const itemProductCardsList =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log(itemProductCardsList);
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
        <div className="items-list-container">
          {itemProductCardsList?.map((item) => {
            const title = item.card?.card?.title + " (" + item.card.card.itemCards?.length + ")";
            return (
              <div>
                <h3>{title}</h3>
                <div className="items-list">
                  {item.card.card.itemCards?.map((item, index) => {
                    const itemDetails = item.card?.info;
                    return (
                      <div>
                        <div key={index} className="item-card">
                          <img
                            className="item-image"
                            src={RESTAURANT_MENU_URL + itemDetails?.imageId}
                          />
                          <div>{itemDetails.name}</div>
                          <strong>₹{itemDetails?.price / 100}</strong>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
