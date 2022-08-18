import Header from "../../components/client/Header";
import ImageGalleryComponent from "../../components/client/ImageGallery";
import Map, { Marker } from "react-map-gl";
import Footer from "../../components/client/Footer";
import avatar from "../../assets/avatar.png";
import { adsSelector } from "../../redux/slice/adsSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetch_all_ads } from "../../api/adsApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [toggleViewPhone, setToggleViewPhone] = useState(false);
  const { id } = useParams();
  const ads = useSelector(adsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_all_ads());
  }, [dispatch]);

  const ads_data = ads.filter((ads) => ads._id === id)[0];

  return (
    <div>
      <Header />
      {ads_data && (
        <div className="container mx-auto flex justify-between my-5">
          <div className="left-side">
            <div className="gallery w-10/12">
              <div className="flex justify-between items-center py-2">
                <div>
                  <h1 className="font-bold text-lg">{ads_data.category}</h1>
                  <p className="text-gray-500">{ads_data.room_info.location}</p>
                </div>
                <div className="price font-bold text-lg">
                  GHS {ads_data.room_info.price}
                </div>
              </div>
              <ImageGalleryComponent images={ads_data.images} />
              <div className="information w-full shadow-sm shadow-slate-500 p-2 my-5">
                <h1 className="font-bold">General Information</h1>
                <div className="info">
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-gray-500 font-bold text-left px-3">
                          Published Date
                        </td>
                        <td className="text-black font-bold text-left px-3">
                          {new Date(ads_data.updatedAt).toLocaleDateString(
                            "en-us",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </td>
                      </tr>

                      <tr>
                        <td className="text-gray-500 font-bold text-left px-3">
                          Housing Shape
                        </td>
                        <td className="text-black font-bold text-left px-3">
                          {ads_data.category}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-500 font-bold text-left px-3">
                          Number Of Rooms
                        </td>
                        <td className="text-black font-bold text-left px-3">
                          {ads_data.room_info.number_of_rooms}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-500 font-bold text-left px-3">
                          Number Of Bath Rooms
                        </td>
                        <td className="text-black font-bold text-left px-3">
                          {ads_data.room_info.number_of_bath_rooms}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="description w-full shadow-sm shadow-slate-500 p-2 my-5">
                <h1 className="font-bold">Description</h1>
                <p>{ads_data.room_info.description}</p>
              </div>

              <div className="information w-full shadow-sm shadow-slate-500 p-2 overflow-hidden h-96">
                <Map
                  initialViewState={{
                    longitude: -0.25,
                    latitude: 6.083333,
                    zoom: 9,
                  }}
                  style={{
                    width: "100%",
                    height: "60vh",
                    color: "red",
                  }}
                  mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2w1emN2MjBhMGRzbzNjcXYwemF2bXVhYSJ9.PFzwjVmO8HlTajvZX9MCSw"
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                  <Marker
                    longitude={ads_data.coordinate.longitude}
                    latitude={ads_data.coordinate.latitude}
                    anchor="bottom"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </Marker>
                </Map>
              </div>
            </div>
          </div>
          <div className="right_side shadow-sm shadow-slate-700 w-72 h-72 flex justify-start items-center p-4 flex-col">
            <div className="avatar-container w-28 h-28 mt-3 rounded-full overflow-hidden shadow-sm shadow-slate-500">
              <img src={avatar} alt="..." width="100%" />
            </div>
            <p className="py-3">{ads_data.user.name}</p>
            <div
              className="bg-green-600 text-white p-2 rounded-md text-center w-48 cursor-pointer"
              onClick={() => setToggleViewPhone(!toggleViewPhone)}
            >
              <i className="fas fa-phone"></i>{" "}
              {toggleViewPhone ? ads_data.user.contact : "VIEW PHONE"}
            </div>

            <div className="p-2 border my-3 rounded-md text-center w-48 cursor-pointer">
              <i className="fas fa-envelope"></i> SEND MESSAGE
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DetailsPage;
