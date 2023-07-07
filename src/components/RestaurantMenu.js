import { useEffect, useState } from "react";
import {
  CLOUDINARY_URL,
  RESTAURANT_MENU_URL,
  RESTAURANT_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const dispatch = useDispatch();
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

    const itemProductCardsList =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log(itemProductCardsList);

    const handleAddItem = (item) => {
      dispatch(addItem(item)); // action = {payload : 'Grapes'}
    };

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
          {itemProductCardsList?.map((item, index) => {
            const title =
              item.card?.card?.title +
              " (" +
              item.card.card.itemCards?.length +
              ")";
            return (
              <div key={index}>
                <h3 className="font-bold">{title}</h3>
                <div className="items-list">
                  {item.card.card.itemCards?.map((item, index) => {
                    const itemDetails = item.card?.info;
                    return (
                      <div key={index}>
                        <div  className="item-card">
                          <img
                            className="item-image"
                            src={RESTAURANT_MENU_URL + itemDetails?.imageId}
                          />
                          <div>{itemDetails.name}</div>
                          <strong>₹{itemDetails?.price / 100}</strong>
                        </div>
                        <div className="text-center">
                          {/* <div class="custom-number-input h-10 w-32">
                              <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Counter Input
                              </label>
                              <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                  <span class="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                              <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-2xl font-thin">+</span>
                              </button>
                            </div>
                            </div> */}
                          <button
                            className="bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded"
                            onClick={() => handleAddItem(itemDetails)}
                          >
                            Add Item
                          </button>
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
