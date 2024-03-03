import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { DetailPage, Homepage } from "./pages/pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail-movie" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
