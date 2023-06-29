import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwo,
    area
  } = props.resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {cloudinaryImageId ? <img className="w-[100%]" src={CLOUDINARY_URL + cloudinaryImageId} /> : ''}
      <h3>{name}</h3>
      <div className="res-cuisine">{cuisines.join(", ")}</div>
      <div className="flex items-center justify-between mt-[12px] text-[12px]">
        <div className="star-rating">{avgRating} ★</div>
        <div>•</div>
        <div>{slaString}</div>
        <div>•</div>
        <div>{costForTwo / 100} FOR TWO</div>
      </div>
      <div className="mt-2 text-[14px] text-[#686b78]">{area}</div>
    </div>
  );
};

export default RestaurantCard;
