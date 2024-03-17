import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { creditsMovie } from "../../store/services/credits_service";
import { detailMovie } from "../../store/services/movie_service";
import DetailInformationMovie from "../../components/DetailInformationMovie";
import { TraillerVideo, SimilarVideo } from "../../components/components";

function DetailPage() {
  const { id, ismovie } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [DetailMovie, setDetailMovie] = useState();
  const [TopCasts, setTopCasts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    creditsMovie({ id: id, isMovies: ismovie }).then((value) => {
      setTopCasts(value);
    });

    detailMovie({ id: id, isMovies: ismovie })
      .then((value) => {
        setDetailMovie(value);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="bg-black min-h-screen bg-opacity-90"></div>;
  }

  return (
    <section className="bg-black bg-opacity-90">
      <DetailInformationMovie DetailMovie={DetailMovie} TopCasts={TopCasts} />
      <TraillerVideo />
      <SimilarVideo />
    </section>
  );
}

export default DetailPage;
