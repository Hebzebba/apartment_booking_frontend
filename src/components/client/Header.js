import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import brand from "../../assets/brand.png";

const Header = () => {
  const dropDown = useRef(null);
  const navigate = useNavigate();

  const handleDropdown = (e) => {
    dropDown.current.classList.toggle("show");
  };

  const handleLogOut = (e) => {
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    navigate("/signin", { replace: true });
  };
  return (
    <div className="w-screen bg-white shadow-lg shadow-slate-300">
      <nav className="container mx-auto flex items-center h-16">
        <Link to="/">
          <div className="brand flex justify-center items-center">
            <img src={brand} alt="..." />
            <span className="font-mono font-semibold p-2">FastHomes</span>
          </div>
        </Link>

        <ul className="flex justify-between items-center w-24 mx-9">
          <Link to="/rent">
            <li>Rentals</li>
          </Link>
          <Link to="/map">
            <li>Map</li>
          </Link>
        </ul>

        <div className="right flex flex-1 items-center justify-end">
          {localStorage.getItem("user_name") ? (
            <>
              <Link to="/ads">
                <div className="sign-in mx-9 text-white rounded-md p-1 w-32 text-center cursor-pointer bg-red-600">
                  <i className="fas fa-headset"></i> Post Ads
                </div>
              </Link>
              <div className="dropdown">
                <i
                  className="fas fa-user-circle cursor-pointer text-xl"
                  onClick={handleDropdown}
                ></i>
                <div
                  id="myDropdown"
                  className="dropdown-content"
                  ref={dropDown}
                >
                  <div className="cursor-pointer" onClick={handleLogOut}>
                    Log out
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/signin">
                <div className="sign-in mx-9 text-white rounded-md p-1 w-32 text-center cursor-pointer bg-red-600">
                  SignIn
                </div>
              </Link>
              <Link to="/signup">
                <div className="sign-in cursor-pointer">SignUp</div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
