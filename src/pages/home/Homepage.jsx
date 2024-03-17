import React, { useEffect, useState } from "react";
import { ListItem } from "../../components/components";
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
    <div className=" bg-black bg-opacity-90 min-h-screen  text-white">
      {/* Trending n Top Rating */}
      <div className="flex flex-col pt-24 px-8">
        <ListItem
          title="Trending Movies"
          listMovie={TrendMovie}
          isMovie={true}
        />
        <ListItem
          title="Top Rated Movies"
          listMovie={TopRatedMovie}
          isMovie={true}
        />
        <ListItem
          title="Trending Series"
          listMovie={TrendSeries}
          isMovie={false}
        />
        <ListItem
          title="Top Rated Series"
          listMovie={TopRatedSeries}
          isMovie={false}
        />
      </div>
    </div>
  );
}

export default Homepage;
