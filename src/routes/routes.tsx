import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HomePage from "../pages/homePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        children: [
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
        path: 'login',
        element: <About />
        
    }
])

export default router;