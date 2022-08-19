import { useState } from "react";
import brand from "../../assets/brand.png";
import google_ico from "../../assets/google.png";
import Or from "../../assets/Or.png";
import location from "../../assets/Frame83.png";
import home from "../../assets/Frame82.png";
import life from "../../assets/Frame80.png";
import projects from "../../assets/Frame81.png";
import { loginUser } from "../../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ClientSignIn = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(false);

  const alert = useAlert();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setStatus(true);
    e.preventDefault();
    const response = await loginUser(email, password);
    if (response.message === "User login successful") {
      setStatus(false);
      alert.success(response.message);
      localStorage.setItem("user_email", response.user.email);
      localStorage.setItem("user_name", response.user.name);
      navigate("/", { replace: true });
    } else {
      setStatus(false);
      alert.error("Invalid email or password");
    }
  };
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="sign-up-container shadow-sm shadow-slate-500 w-full flex h-4/5">
        <div className="left-side w-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="brand flex flex-col justify-center items-center">
              <img src={brand} alt="..." className="w-8" />
              <p className="font-mono">FastHomes</p>
            </div>
            <div className="font-mono text-center font-bold my-5 p-1">
              <h2>Why should I Join Fasthome?</h2>
              <p>
                To have the experience of “property”, “information” and “trust”
                in the real estate world all together…
              </p>
            </div>
            <div className="grid grid-cols-2 w-full mt-7">
              <div className="flex flex-col justify-center items-center">
                <img src={location} alt="..." className="w-10" />
                <p className="font-mono text-xs text-center my-4">
                  Learn about <br />
                  location
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={home} alt="..." className="w-10" />
                <p className="font-mono text-xs text-center my-4">
                  Find out the value <br />
                  of your house <b />
                  free of charge
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={life} alt="..." className="w-10" />
                <p className="font-mono text-xs text-center my-4">
                  Discover houses <br />
                  that will improve your <b />
                  live quality
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={projects} alt="..." className="w-10" />
                <p className="font-mono text-xs text-center my-4">
                  Be aware of <br />
                  new projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side border-l-2 border-slate-400 flex justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-96">
            <div className="connect-google flex bg-blue-900 text-white p-1 rounded-md text-center cursor-pointer w-full my-5">
              <img src={google_ico} alt="..." />{" "}
              <span className="mx-4">Connect with google</span>
            </div>
            <img src={Or} alt="..." />
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="form-group my-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-1"
                  onChange={(e) => setEamil(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group my-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 my-5 p-1 rounded-md text-white"
              >
                <div>SIGN IN</div>
                <div>
                  <ScaleLoader
                    override={override}
                    loading={status}
                    siz={50}
                    color="#ffff"
                  />
                </div>
              </button>
              <div>
                <Link to="/signup">
                  <span>
                    Not a menber? <small>Sign Up</small> now!
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSignIn;
