import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        console.log('Parent constructor called');
    }

    componentDidMount() {
        console.log('Parent componentDidMount called');
    }
    render() {
        console.log('Parent render called');
        
        return (<div>
            <h1>About Us</h1>
            {/* <User name={'User (Functional)'}/> */}
            <UserClass name={'User (Class based)'}/>
        </div>)
    }
}

// const AboutUs = () => {
//     return (<div>
//         <h1>About Us</h1>
//         <User name={'User (Functional)'}/>
//         <UserClass name={'User (Class based)'}/>
//     </div>)
// }

export default AboutUs;