import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwo,
  } = props.resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {cloudinaryImageId ? <img className="res-logo" src={CLOUDINARY_URL + cloudinaryImageId} /> : ''}
      <h3>{name}</h3>
      <div className="res-cuisine">{cuisines.join(", ")}</div>
      <div className="res-props">
        <div className="star-rating">{avgRating} ★</div>
        <div>•</div>
        <div>{slaString}</div>
        <div>•</div>
        <div>{costForTwo / 100} FOR TWO</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
