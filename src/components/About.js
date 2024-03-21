import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is Namaste React web series</h2>
                <UserClass name={"Akshay Saini"} location={"Dehradun"} />
            </div>
        );
    }
}

export default About;