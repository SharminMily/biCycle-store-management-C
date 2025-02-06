import Banner from "./Banner";
import BycicleCard from "./BicycleCard";
import DiscountCard from "./DiscountCard";
import OneRide from "./OneRide";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div>   
      <Banner />
      <OneRide />
      <BycicleCard />
      <DiscountCard /> 
      <Testimonials />
    
    </div>
  );
};

export default HomePage;
