import { RESTAURANT_MENU_URL } from "../utils/constants";

const FoodItem = ({itemDetails}) => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-between p-3">
        <img
          className="w-[50px]"
          src={RESTAURANT_MENU_URL + itemDetails?.imageId}
        />
        <div>{itemDetails.name}</div>
        <strong>₹{itemDetails?.price / 100}</strong>
      </div>
    </div>
  );
};

export default FoodItem;
