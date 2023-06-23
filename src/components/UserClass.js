import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userData: {},
      
    };
    console.log("Child constructor called");
  }

  async componentDidMount() {
    console.log("Child componentDidMount called");
    const data = await fetch("https://api.github.com/users/nagasathish");
    const json = await data.json();
    console.log(json);
    this.setState({ userData: json });
  }

  render() {
    console.log("Child render called");
    const { name, location, avatar_url } = this.state?.userData;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click from Class
        </button>
        <div>
          <img style={{ width: "50px" }} src={avatar_url} />
          <h2>{name}</h2>
          <h4>{location}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
