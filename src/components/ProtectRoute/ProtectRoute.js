import { Navigate } from "react-router-dom";
import { useTheContext } from "../../context/contex";

export function ProtectRoute({children}){
       const {userAutentication, loading} = useTheContext();


       if(loading) return <p>Cargando...</p>
       if(!userAutentication) return <Navigate to={'/'}/>

       return<>{children}</>
}