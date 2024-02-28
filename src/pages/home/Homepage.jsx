import React, { useEffect, useState } from "react";
import { ListItem, Navbar } from "../../components/components";
import {
  topRatedService,
  trendService,
} from "../../store/services/movie_service";

function Homepage() {
  const [TrendMovie, setTrendMovie] = useState([]);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);

  const [TrendSeries, setTrendSeries] = useState([]);
  const [TopRatedSeries, setTopRatedSeries] = useState([]);

  useEffect(() => {
    trendService({ isMovies: true }).then((value) => {
      setTrendMovie(value);
    });

    topRatedService({ isMovies: true }).then((value) => {
      setTopRatedMovie(value);
    });

    trendService({ isMovies: false }).then((value) => {
      setTrendSeries(value);
    });

    topRatedService({ isMovies: false }).then((value) => {
      setTopRatedSeries(value);
    });
  }, []);

  return (
    <div className=" bg-black min-h-screen bg-opacity-90 text-white">
      {/* Navbar Section */}
      <Navbar />
      {/* Trending n Top Rating */}
      <div className="flex flex-col pt-24 px-8">
        <ListItem title="Trending Movies" listMovie={TrendMovie} />
        <ListItem title="Top Rated Movies" listMovie={TopRatedMovie} />
        <ListItem title="Trending Series" listMovie={TrendSeries} />
        <ListItem title="Top Rated Series" listMovie={TopRatedSeries} />
      </div>
    </div>
  );
}

export default Homepage;
