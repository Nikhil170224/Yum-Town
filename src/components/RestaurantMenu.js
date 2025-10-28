import { useEffect } from "react"

const RestaurantMenu = ()=>{
//     useEffect(()=>{
//         fetchMenu()
//     },[])

//     const fetchMenu = async ()=>{
//         const data = await fetch("http://localhost:5000/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&catalog_qa=undefined&submitAction=ENTER");

//         const json = await data.json();

//         console.log(json);
//     }
    return(
        <div className="Menu">
            <h1>Name of the Restaurant</h1>
            <h2>cost for Two</h2>
            <div className="items_list">
                <ul>
                    <li>chilli paneer</li>
                    <li>chilli potato</li>
                    <li>manchurian</li>
                    <li>litti Choka</li>
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;