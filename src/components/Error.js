import { useRouteError } from "react-router";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>Oops...!</h1>
            <p>something went wrong !</p>
            <h1>{err.status} : {err.statusText}</h1>
        </div>
    )
}

export default Error;