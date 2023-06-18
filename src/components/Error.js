import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Status Code is {error?.status}</h1>
            <h2>Oops! {error?.data}!</h2>
        </div>
    )
}

export default Error;