import { useState } from "react";
import { useAlert } from "react-alert";
import BeatLoader from "react-spinners/BeatLoader";

import Header from "../../components/client/Header";
import Footer from "../../components/client/Footer";
import { postAds } from "../../api/adsApi";

const Ads = () => {
  const [category, setCategory] = useState("Apartment");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [bath_rooms, setBathRooms] = useState("");
  const [location, setLocation] = useState("");
  const [longitude, setLongitude] = useState("");
  const [distance, setDistance] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  const [loader, setLoader] = useState(false);

  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    file.forEach((element) => {
      formData.append("file", element);
    });
    const email = localStorage.getItem("user_email");
    formData.append("email", email);
    formData.append("category", category);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("number_of_rooms", rooms);
    formData.append("number_of_bath_rooms", bath_rooms);
    formData.append("distance", distance);
    formData.append("description", description);

    setLoader(true);
    const response = await postAds(formData);
    if (response.message === "Ads posted successful") {
      setLoader(false);
      alert.success(response.message);
    } else {
      setLoader(false);
      alert.error("Ads post failed");
    }
  };

  const handleFileChange = (e) => {
    const chosen_files = Array.prototype.slice.call(e.target.files);
    setFile(chosen_files);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="my-5 w-full shadow-md shadow-slate-600 bg-white flex justify-center items-center flex-col">
          <h1 className="font-bold text-lg">General Information</h1>
          <form
            className="w-1/2 p-3"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form-group flex justify-between items-center">
              <label htmlFor="category" className="mx-3 font-bold">
                Category
              </label>
              <div className="category border border-slate-500 p-1 rounded-md w-4/5 my-2">
                <select
                  name="category"
                  className="outline-none w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Mini Flat">Mini Flat</option>
                  <option value="Room & Parlour">Room & Parlour</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Mansion">Mansion</option>
                </select>
              </div>
            </div>
            <div className="form-group flex justify-between items-center">
              <label htmlFor="price" className="mx-3 font-bold">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="rooms" className="mx-3 font-bold">
                Rooms
              </label>
              <input
                type="number"
                name="rooms"
                id="rooms"
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                required
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="bath_rooms" className="mx-3 font-bold">
                Bath rooms
              </label>
              <input
                type="number"
                name="bath_rooms"
                id="bath_rooms"
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
                value={bath_rooms}
                onChange={(e) => setBathRooms(e.target.value)}
                required
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="location" className="mx-3 font-bold">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="distance" className="mx-3 font-bold">
                Distance
              </label>
              <input
                type="number"
                name="distance"
                id="distance"
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="" className="mx-3 font-bold">
                Coordinate
              </label>
              <input
                type="number"
                placeholder="Longitude"
                name="longitude"
                id="longitude"
                className="border border-slate-500 rounded-md p-1 w-60 my-2"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />

              <input
                type="number"
                placeholder="Latitude"
                name="latitude"
                id="latitude"
                className="border border-slate-500 rounded-md p-1 w-60 my-2"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="date" className="mx-3 font-bold">
                Description
              </label>
              <textarea
                name="date"
                id="date"
                rows={5}
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group flex justify-between items-center">
              <label htmlFor="images" className="mx-3 font-bold">
                Image upload
              </label>
              <input
                type="file"
                name="file"
                id="images"
                onChange={handleFileChange}
                accept=".png,.JPG,.jpg"
                multiple
                className="border border-slate-500 rounded-md p-1 w-4/5 my-2"
              />
            </div>

            <div className="form-group flex justify-between items-center">
              <label htmlFor="" className="mx-3 font-bold"></label>
              <input
                type="submit"
                className="bg-red-500 font-bold text-white rounded-md p-1 w-4/5 my-2 cursor-pointer"
                onClick={handleSubmit}
              />
              <BeatLoader size={15} loading={loader} />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ads;
