import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Default Location",
                avatar_url: ""
            }
        }
        console.log("Child constructor");
    }

    async componentDidMount() {
        console.log("Child Component Did Mount");

        //API Call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("Child component did update");
    }

    componentWillUnmount() {
        console.log("Child Component Will unmount");
    }

    render() {
        console.log("Child render");
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @akshaymarch7</h2>
                <img src={avatar_url} />
            </div>
        )
    }
}

export default UserClass;