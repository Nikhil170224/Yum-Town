// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body =()=>{
  const [ResList,setResList] = useState([]);
  const [searchText,setsearchText] = useState("");
  const [filteredReslist,setfilteredReslist] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.1024901&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json();
    // Safely access nested data with optional chaining (to avoid crashes)
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(restaurants);
    setfilteredReslist(restaurants);
  }

    return ResList.length === 0 ?
     <Shimmer/> : (
        <div className="body">
          <div className="filter">
            <div className="search-bar">
                <input type="text" 
                className="search-box" 
                value={searchText} 
                onChange={(e)=>{
                  setsearchText(e.target.value)
                }}/>
                
                <button onClick={()=>{
                  const newfilteredlist = ResList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setfilteredReslist(newfilteredlist);
                }}>search</button>
            </div>
            
            <div className="filter_btn">
              <button onClick={()=>{
                const filteredlist = ResList.filter((res) => res.info.avgRating > 4.4);
                  setfilteredReslist(filteredlist);
                }
              }>
                Top Rated Restaurants
              </button>
            </div>
          </div>
            
            <div className="cards-container">
              {
                filteredReslist.map((restaurant)=> <Card key ={restaurant.info.id} resobj = {restaurant.info}/>)
              }
            </div>
        </div>
        
    )
}

export default Body;