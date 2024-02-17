import "./App.css";
import { Homepage } from "./pages/pages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
