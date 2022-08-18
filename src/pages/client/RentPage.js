import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetch_all_ads } from '../../api/adsApi'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'
import ItemsCard from '../../components/client/ItemsCard'
import { adsSelector } from '../../redux/slice/adsSlice'

const RentPage = () => {
  const [ads_data, setAds] = useState([])
  // const [range, setRange] = useState({ min: 2, max: 10 })
  const selectCatRef = useRef()
  const selectRoomRef = useRef()
  let ads = useSelector(adsSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetch_all_ads())
    if (selectCatRef.current.value === 'Category' && selectRoomRef.current.value === 'Number of rooms') {
      setAds(ads)
    }
  }, [dispatch, ads])

  const filterAdsByCategory = (key) => {
    if (selectCatRef.current.value === 'Category') {
      setAds(ads)
    } else {
      ads = ads.filter((item) => item.category === key)
      setAds(ads)
    }
  }

  const filterAdsByRooms = (key) => {
    if (selectRoomRef.current.value === 'Number of rooms') {
      setAds(ads)
    } else {
      ads = ads.filter((item) => item.room_info.number_of_rooms === key)
      setAds(ads)
    }
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="fileters my-5 w-full shadow-md shadow-slate-600 bg-white flex justify-start items-center px-5 py-1 gap-x-2">
          <div className="category border border-slate-500 p-2 rounded-md">
            <select name="category" className="p-1 outline-none" onChange={(e) => filterAdsByCategory(e.target.value)} ref={selectCatRef}>
              <option value="Category">Category</option>
              {ads &&
                ads.map((item) => (
                  <option key={item._id} value={item.category}>
                    {item.category}
                  </option>
                ))}
            </select>
          </div>
          <div className="category border border-slate-500 p-2 rounded-md">
            <select name="category" className="p-1 outline-none" onChange={(e) => filterAdsByRooms(e.target.value)} ref={selectRoomRef}>
              <option value="Number of rooms">Number of rooms</option>
              {ads &&
                ads.map((item) => (
                  <option key={item._id} value={item.room_info.number_of_rooms}>
                    {item.room_info.number_of_rooms}
                  </option>
                ))}
            </select>
          </div>

          {/* <div className="category border border-slate-500 p-2 rounded-md flex w-auto">
            <label htmlFor="price" className="px-2">
              Price
            </label>
            <input type="range" name="price" id="price" />
          </div> */}
          <div className="ml-auto">
            <i className="fas fa-filter"></i>
          </div>
        </div>

        <div className="items grid grid-cols-4 gap-10 mb-5">
          {ads_data.map((item) => (
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
      </div>
      <Footer />
    </div>
  )
}

export default RentPage
