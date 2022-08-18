import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import NoPage from "./pages/404/404";
import Ads from "./pages/client/Ads";
import DetailsPage from "./pages/client/DetailsPage";
import HomePage from "./pages/client/HomePage";
import MapPage from "./pages/client/MapPage";
import RentPage from "./pages/client/RentPage";
import ClientSignIn from "./pages/client/SignIn";
import ClientSignUp from "./pages/client/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<ClientSignIn />} />
        <Route path="/signup" element={<ClientSignUp />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rent"
          element={
            <ProtectedRoute>
              <RentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <MapPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/details/:id"
          element={
            <ProtectedRoute>
              <DetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ads"
          element={
            <ProtectedRoute>
              <Ads />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
