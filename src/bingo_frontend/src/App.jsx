import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Private/Home";
import { useSelector } from "react-redux";
import StartSorting from "./Private/Dashboard/StartSorting";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <StartSorting /> : <Home />} />
      </Routes>
    </Router>
  );
};

export default App;
