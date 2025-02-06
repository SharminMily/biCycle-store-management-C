import { NavLink } from "react-router-dom";

import { Divider } from "primereact/divider";

const AdminRoutes = () => {
  return (
    <div
      className={`  bg-gray-900 flex flex-col h-screen min-h-full text-white w-52 m-0 p-5 `}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          alt="logo"
          src="https://i.ibb.co.com/Kc8HWNxn/bicycle-Logo.png"
          width={60}
          height="24"
          className="mr-2 rounded-full"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Divider
          layout="horizontal"
          className="flex md:hidden"
          align="center"
        ></Divider>
        <span className="text-white text-sm font-serif"> Bycicle </span>
        <Divider
          layout="horizontal"
          className="flex md:hidden"
          align="center"
        ></Divider>
      </div>
      <li className="flex items-center gap-2 pb-3 mt-4 p-2">
        <NavLink to="/dashboard/adminHome" className="">
          Admin Home
        </NavLink>
      </li>
      <li className="flex items-center gap-2 pb-3 mt-4 p-2">
        <NavLink to="/dashboard/add-bicycle" className="">
          Add Bicycle
        </NavLink>
      </li>
      <li className="flex items-center gap-2 pb-3 mt-4 p-2">
        <NavLink to="/dashboard/manage-bicycle" className="">
          Manage Bicycle
        </NavLink>
      </li>
      <li className="flex items-center gap-2 pb-3 mt-4 p-2">
        <NavLink to="/dashboard/all-users" className="">
          All Users
        </NavLink>
      </li>
      <Divider
        layout="horizontal"
        className="flex md:hidden"
        align="center"
      ></Divider>

      <li className="flex items-center gap-2 pb-3 mt-4 p-2">
        <NavLink to="/" className="">
          Home
        </NavLink>
      </li>
    </div>
  );
};

export default AdminRoutes;
