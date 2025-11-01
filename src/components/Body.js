// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { REST_LIST } from "../utils/constants";


const Body =()=>{
  const [ResList,setResList] = useState([]);
  const [searchText,setsearchText] = useState("");
  const [filteredReslist,setfilteredReslist] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(REST_LIST)

    const json = await data.json();
    // Safely access nested data with optional chaining (to avoid crashes)
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(restaurants);
    setfilteredReslist(restaurants);
  }
  const onlinestatus = useOnlineStatus();
  if(onlinestatus === false) return <h1>🔌 Please check your internet conection...</h1>

    return ResList.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="bg-opacity-30 px-5 py-3.5 flex items-center sticky top-0 z-50 backdrop-blur-sm">
          <div className="search-bar flex items-center border-2 caret-black">
            <input
              type="text"
              className="w-48 px-3 py-1 focus:outline-none"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />

            <button
              className="focus:outline-none hover:rotate-45"
              onClick={() => {
                const newfilteredlist = ResList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredReslist(newfilteredlist);
              }}
            >
              🔍
            </button>
          </div>
          <div className="mx-14">
            <button
              className="px-4 py-1 rounded-md border caret-black bg-orange-200 hover:bg-orange-400"
              onClick={() => {
                const filteredlist = ResList.filter(
                  (res) => res.info.avgRating > 4.4
                );
                setfilteredReslist(filteredlist);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className="flex flex-wrap mx-10">
          {filteredReslist.map((restaurant) => (
            <Card key={restaurant.info.id} resobj={restaurant.info} />
          ))}
        </div>
      </div>
    );
}

export default Body;