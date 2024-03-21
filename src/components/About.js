import UserClass from "./UserClass";
import React from "react";
import User from "./User";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is Namaste React web series</h2>
                {/* <UserClass name={"Akshay Saini"} location={"Dehradun"} /> */}
                <User name={"Akshay Saini"} />
            </div>
        );
    }
}

export default About;