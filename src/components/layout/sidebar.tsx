import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import AdminRoutes from "../../routes/adminRoutes";
import UserRoutes from "../../routes/userRoute";
import { verifyToken } from "../../utils/verifyToken";

const userRole = {
  Admin: "admin",
  User: "user",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user: TUser | null = null;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch (user?.role) {
    case userRole.Admin:
      sidebarItems = <AdminRoutes />;
      break;
    case userRole.User:
      sidebarItems = <UserRoutes />;
      break;
    default:
      sidebarItems = <p>No access</p>;
  }

  return <div>{sidebarItems}</div>;
};

export default Sidebar;
