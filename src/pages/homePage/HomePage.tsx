import Banner from "./Banner"
import Footer from "./Footer"
import Navbar from "./Navbar"

const HomePage = () => {
  return (
    <div>
     
        < Navbar />
        <Banner />
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        < Footer/>

       
    </div>
  )
}

export default HomePage