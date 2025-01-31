import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HomePage from "../pages/homePage/HomePage";
import HomeLayout from "../components/layout/HomeLayout"
import Login from "../pages/from/Login";
import Register from "../pages/from/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
              },
            {
              path: 'about',
              element: <About />
            },
            {
              path: 'contact',
              element: <Contact />
            },
        ]
    },
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />
        
    },
    {
        path: '/register',
        element: <Register />
        
    }
])

export default router;