import FeturedRentals from "../../components/client/FeaturedRentals";
import Header from "../../components/client/Header";
import HeroComponent from "../../components/client/HeroComponent";
import Footer from "../../components/client/Footer";
import { useEffect } from "react";
import { fetch_all_ads } from "../../api/adsApi";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_all_ads());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <HeroComponent />
      <FeturedRentals />
      <Footer />
    </div>
  );
};

export default HomePage;
