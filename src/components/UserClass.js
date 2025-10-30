import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor is called")
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("child componentdidMount is called ")
    }
    render(){
        const {name,location} = this.props;
        const {count,count2} = this.state;
        console.log("child render is called");
        return(
            <div className="user-class">
                <h1>count: {count} </h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
                <h2>Name: {name} </h2>
                <h3>Location: {location} </h3>
                <h4>Contact: @nikhilmi1050</h4>
            </div>
        )
    }
}

export default UserClass;