import { useRouteError } from "react-router"; // for errr handling, only available for erros, its a hook

const Error= ()=>{
    const err = useRouteError();
<div>

    <h1 style={{color:'red'}}>Oops! Something went wrong </h1>
    <h3>{err}</h3>

</div>
}

export default Error;