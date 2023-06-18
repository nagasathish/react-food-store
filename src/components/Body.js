import { useEffect, useState } from "react";
import restInfo from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
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
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchString}
          onChange={($event) => setSearchString($event.target.value)}
        />
        <button
          onClick={() => {
            onTitleSearch();
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={() => filterTopRestaurants()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link style={{ textDecoration: 'none', color: 'black' }}
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
