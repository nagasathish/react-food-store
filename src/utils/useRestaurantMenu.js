import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestaurantData(id);
  }, []);

  const getRestaurantData = async (restaurantId) => {
    const data = await fetch(RESTAURANT_URL + restaurantId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
