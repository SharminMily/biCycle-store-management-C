import { NavLink, Outlet } from "react-router-dom";

// const items = [
//   { key: "card", label: "/card" },
//   { key: "cardDetails", label: "/cardDetails" },
//   { key: "update", label: "/update" },
//   { key: "card", label: "/card" },
//   { key: "card", label: "/card" },
// ];

const MainLayout = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-900 h-screen   text-white w-52 p-5 transition-all`}>
        {/* ${ isCollapsed ? "w-16" : "w-64"} */}
        {/* <button
          className="mb-4 bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "☰" : "✖"}
        </button> */}
        <h1>Bycicle store</h1>
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
       
      </div>
     
        <div className="flex-1">
        <header className="bg-white shadow p-6 mb-8"></header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
