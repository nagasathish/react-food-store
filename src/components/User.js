import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
            setCount(count + 1)    
        }}>Click from Function</button>
            <h2>Name: {props.name}</h2>
            <h3>Location</h3>
        </div>
    )
}

export default User;