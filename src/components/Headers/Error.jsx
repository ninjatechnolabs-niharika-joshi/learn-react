import { useRouteError } from "react-router"; // for errr handling, only available for erros, its a hook

const Error= ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1 style={{color:'red'}}>Oops! Something went wrong </h1>
            <h3 style={{color:'red'}}>{err?.statusText || err?.message}</h3>
        </div>
    );
}

export default Error;