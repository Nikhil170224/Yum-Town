import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(){
        super();
        console.log("parent constructor is called")
    }
    componentDidMount(){
    console.log("parent's componentdidMount is called ")
    }
    render(){
        console.log("parent render is called")
        return(
            <div className="about_us">
                <h1>About Us!</h1>
                <UserClass name={"Nikhil (Class)"} location={"Ghaziabad"} />
            </div>
        )
    }
}

export default About;