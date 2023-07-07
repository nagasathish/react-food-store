import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ({locationData}) => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchString, setSearchString] = useState("");

  filterTopRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => {
      return res.data.avgRating > 4;
    });
    setFilteredRestaurants(filteredRestaurants);
    console.log(filteredRestaurants);
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  console.log("Body rendered before useEffect");

  const fetchData = async () => {
    setListOfRestaurants([]);
    const data = await fetch(DATA_URL);
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json.data.cards[2].data.data.cards);
  };

  const onTitleSearch = () => {
    if (searchString === "") {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const filteredRest = listOfRestaurants.filter((restaurant) => {
        return restaurant.data.name
          .toLowerCase()
          .includes(searchString.toLowerCase());
      });
      setFilteredRestaurants(filteredRest);
    }
  };
  return (
    <div className="body">
      <div className="flex flex-auto m-5">
      <div className="">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchString}
          onChange={($event) => setSearchString($event.target.value)}
        />
        <button className="px-6 py-1 bg-orange-400 ml-2"
          onClick={() => {
            onTitleSearch();
          }}
        >
          Search
        </button>
      </div>
      <div className="ml-5">
        <span>Filters: </span>
        <button className="px-6 py-1 bg-orange-300" onClick={() => filterTopRestaurants()}>
          Top Rated Restaurants
        </button>
      </div>
      </div>
      
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link style={{ textDecoration: 'none', color: 'black' }}
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} locationData = {locationData} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
