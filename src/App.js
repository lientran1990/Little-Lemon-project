import "./App.css";
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/reservation" element={<Booking />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;
