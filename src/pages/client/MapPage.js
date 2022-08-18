import Header from "../../components/client/Header";
import Map from "react-map-gl";
import { adsSelector } from "../../redux/slice/adsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetch_all_ads } from "../../api/adsApi";
import { Marker } from "react-map-gl";
import { Link } from "react-router-dom";

const MapPage = () => {
  const ads = useSelector(adsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_all_ads());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="container mx-auto h-full w-full shadow-md shadow-slate-500 my-5 overflow-hidden">
        <Map
          initialViewState={{
            longitude: -0.25,
            latitude: 6.083333,
            zoom: 9,
          }}
          style={{
            width: "100vw",
            height: "80vh",
            color: "red",
          }}
          mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2w1emN2MjBhMGRzbzNjcXYwemF2bXVhYSJ9.PFzwjVmO8HlTajvZX9MCSw"
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {ads &&
            ads.map((item) => (
              <Link to={`/details/${item._id}`}>
                <Marker
                  key={item._id}
                  longitude={item.coordinate.longitude}
                  latitude={item.coordinate.latitude}
                  anchor="bottom"
                >
                  <i className="fas fa-map-marker-alt cursor-pointer"></i>
                </Marker>
              </Link>
            ))}
        </Map>
      </div>
    </div>
  );
};

export default MapPage;
