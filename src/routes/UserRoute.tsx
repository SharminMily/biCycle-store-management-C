import { NavLink } from "react-router-dom"

const UserRoutes = () => {
  return (
    <div
        className={`bg-gray-900 h-screen   text-white w-52 p-5 transition-all`}
      >
             <h1>Bycicle store</h1>
        <li className="flex items-center gap-2 pb-3 mt-4 p-2">
          <NavLink to="/dashboard/userHome" className="">
           user Home
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
      </div>
  )
}

export default UserRoutes