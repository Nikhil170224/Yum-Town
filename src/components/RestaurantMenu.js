import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />

    const {name, cusines, costForTwoMessage} =  resInfo?.cards[2]?.card?.card?.info;
    const {resItems} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="Menu">
            <h1>{name}</h1>
            <p>{cusines.join(",")}- Rs.{costForTwoMessage}</p>
            <h1>Menu:-</h1>
            <div className="items_list">
                    {resItems.map((item)=>(
                        <div key={item.card.info.id} className="menu_items">
                            <h2 className="item">{item.card.info.name} - Rs.</h2>
                            <h2>{item.card.info.price/100 || item.card.info.defaultPrice/100}</h2>
                        </div>
                    ))}                  
            </div>
        </div>
    )
}

export default RestaurantMenu;