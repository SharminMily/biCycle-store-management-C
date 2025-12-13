import Banner from "./Banner";
import BicycleCard from "./BicycleCard";
import DiscountCard from "./DiscountCard";
import OneRide from "./OneRide";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <OneRide />
      <BicycleCard />
      <DiscountCard />
      <Testimonials />
    </div>
  );
};

export default HomePage;
