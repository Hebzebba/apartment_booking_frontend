import ItemsCard from "./ItemsCard";
import map_search from "../../assets/map-search.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adsSelector } from "../../redux/slice/adsSlice";
import { fetch_all_ads } from "../../api/adsApi";
import { useEffect } from "react";

const FeturedRentals = () => {
  const ads = useSelector(adsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_all_ads());
  }, [dispatch]);
  const ads_data = ads.slice(0, 4);
  return (
    <div className="container mx-auto my-10">
      <div className="w-full flex justify-between">
        <h3 className="text-lg font-mono font-bold">Featured Rentals</h3>
        <Link to="/rent">
          <div className="p-1 w-16 border text-center cursor-pointer">All</div>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10 my-6 w-full mx-auto">
        {ads_data &&
          ads_data.map((item) => (
            <Link to={`/details/${item._id}`} key={item._id}>
              <ItemsCard
                image={item.images[0]}
                price={item.room_info.price}
                bath_rooms={item.room_info.number_of_bath_rooms}
                rooms={item.room_info.number_of_rooms}
                distance={item.room_info.distance}
                location={item.room_info.location}
                category={item.category}
              />
            </Link>
          ))}
      </div>
      <div className="w-full flex shadow-sm shadow-slate-400 my-20">
        <div className="text-content flex-1 p-2 flex flex-col">
          <p className="text-lg text-black font-bold font-mono">
            Search Your Dream House On The Map
          </p>
          <small className="font-mono font-bold text-slate-500">
            Find the house you are looking for easily according to location
            information.
          </small>
          <div className="btn p-1 text-white font-mono text-sm text-center w-32 rounded-lg my-auto cursor-pointer">
            <Link to="/map">
              <div className="btn p-1 bg-red-500 text-white font-mono text-sm text-center w-32 rounded-lg my-auto cursor-pointer">
                Search on map
              </div>
            </Link>
          </div>
        </div>
        <div className="img">
          <img src={map_search} alt="..." className="w-96 h-52" />
        </div>
      </div>
    </div>
  );
};

export default FeturedRentals;
