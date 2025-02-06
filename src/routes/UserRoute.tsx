import { Divider } from "primereact/divider"
import { NavLink } from "react-router-dom"

const UserRoutes = () => {
  return (
    <div
        className={`bg-gray-900 h-screen   text-white w-52 p-5 transition-all`}
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

       {/* all route */}
        <li className="flex items-center gap-2 pb-3 mt-4 p-2">
          <NavLink to="/dashboard/userHome" className="">
          Home
          </NavLink>
        </li>
        <li className="flex items-center gap-2 pb-3 mt-4 p-2">
          <NavLink to="/dashboard/manage-order" className="">
            Manage Order
          </NavLink>
        </li>
        <li className="flex items-center gap-2 pb-3 mt-4 p-2">
          <NavLink to="/dashboard/order-details" className="">
          Order Details
          </NavLink>
        </li>
        
        <li className="flex items-center gap-2 pb-3 mt-4 p-2">
          <NavLink to="/dashboard/add-review" className="">
           Add Review
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
        <li className="flex items-center gap-2 pb-3 mt-4 p-2">
                <NavLink to="/" className="">
                about
                </NavLink>
              </li>
      </div>
  )
}

export default UserRoutes