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
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("Namaste React")
        }, 1000);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
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