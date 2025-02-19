import { Outlet } from "react-router-dom";
import Navbar from "../../pages/homePage/Navbar";
import Footer from "../../pages/homePage/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">   
     
      <Navbar />     
      <main className="flex-1 p-6">
        <Outlet /> 
      </main>

    <Footer />
    </div>
  );
};

export default App;
