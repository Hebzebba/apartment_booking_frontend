const ItemsCard = ({
  image,
  price,
  category,
  location,
  date,
  rooms,
  bath_rooms,
  distance,
}) => {
  return (
    <div className="card w-72 shadow-sm shadow-slate-400 p-1">
      <div className="card-img">
        <img src={image} alt="..." className="w-full h-36 overflow-hidden" />
        <div className="card-body">
          <p className="price text-base font-bold text-slate-900 mt-2 font-mono">
            GHS {price}
          </p>
          <p className="price text-sm font-bold text-slate-900 mt-2 font-mono">
            {category} for rent
          </p>
          <p className="price text-sm font-bold text-gray-400 mt-2 font-mono">
            {location}
          </p>
          <p className="price text-sm font-bold text-gray-400 mt-2 font-mono">
            {date}
          </p>
          <div className="price text-sm font-bold text-slate-900 my-2 font-mono flex justify-between w-1/2">
            <i className="fas fa-home"> {rooms}</i>
            <i className="fas fa-bath"> {bath_rooms}</i>
            <i className="fas fa-compass"> {distance}m</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
