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
        return (
          <div className="user-class m-7 space-y-3">
            <div className="flex space-x-4">
              <h1 className="text-2xl font-semibold">count: {count} </h1>
              <button
                className="px-2 py-1 rounded-lg bg-blue-300 hover:bg-blue-500"
                onClick={() => {
                  this.setState({
                    count: this.state.count + 1,
                  });
                }}
              >
                Increase Count
              </button>
            </div>
            <h2 className="text-lg font-semibold">
              Name:<span className="ml-4">{name}</span>
            </h2>
            <h3 className="text-lg font-semibold">
              Location:<span className="ml-4">{location}</span>{" "}
            </h3>
            <h4 className="text-lg font-semibold">
              Contact:<span className="ml-4">nikhilmi1050@gmail.com</span>
            </h4>
          </div>
        );
    }
}

export default UserClass;