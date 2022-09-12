import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const PublicRoute = ({ children, restricted = false, }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to="/contacts" /> : children;
}



