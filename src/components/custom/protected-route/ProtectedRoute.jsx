import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const ProtectedRoute = () => {
  return (
    <div className="flex">
      <div className="flex-[1.5] ring-1 ring-slate-200 min-h-screen">
        <Navigation />
      </div>
      <div className="flex-[10.5] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
