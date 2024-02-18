import React, { useEffect, useState } from "react";
import { ListItem, Navbar } from "../../components/components";
import movieTrendService from "../../store/services/movie_service";

function Homepage() {
  const [TrendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    movieTrendService().then((value) => {
      setTrendMovies(value);
    });
  }, []);

  return (
    <div className=" bg-black min-h-screen bg-opacity-90 text-white">
      {/* Navbar Section */}
      <Navbar />
      {/* Trending Movies Section */}
      <ListItem listMovie={TrendMovies} />
    </div>
  );
}

export default Homepage;
