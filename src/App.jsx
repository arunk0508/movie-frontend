import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Login from "./components/Login"; // <-- Import Login page
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage with all components */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
              <Footer/>
            </>
          }
        />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
