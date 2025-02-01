import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import HomePage from "../pages/homePage/HomePage";
import HomeLayout from "../components/layout/MainLayout"
import Login from "../pages/from/Login";
import Signup from "../pages/from/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome";
import ManageBicycle from "../pages/dashboard/adminDashboard/ManageBicycle";
import AllBicycles from "../pages/homePage/AllBicycles";
import AddBicycle from "../pages/dashboard/adminDashboard/AddBicycle";
import AllUser from "../pages/dashboard/adminDashboard/AllUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage />
              },
              {
                path: 'all-bycicles',
                element: <AllBicycles />
              },
              {
                path: 'bicycles-Details',
                element: <About />
              },
            {
              path: 'about',
              element: <About />
            },              
        ]
    }, 
    {
        path: '/login',
        element: <Login />
        
    },
    {
        path: '/signUp',
        element: <Signup />
        
    },
    {
        path: 'dashboard',
        element: <App />,
        children: [
            //user
            {              
                path: "adminHome",
                element: <AdminHome></AdminHome>
                     
              },
            {              
                path: "add-bicycle",
                element: <AddBicycle></AddBicycle>
                     
              },
            {              
                path: "manage-bicycle",
                element: <ManageBicycle></ManageBicycle>
                     
              },
            {              
                path: "all-users",
                element: <AllUser></AllUser>
                     
              },
        ]
      },
])

export default router;