import { useState } from "react";
const User = (props)=>{
    const [count] = useState(0);
    return(
    <div className="m-10 p-4 border bg-fuchsia-200">
        <h1>count: {count} </h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: {props.location} </h3>
        <h4>Contact: @nikhilmi1050</h4>
    </div>
    )
}

export default User;