import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutes() {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  return (
    <div>{isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />}</div>
  );
}
