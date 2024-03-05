import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailMovie } from "../../store/services/movie_service";

function DetailPage() {
  const { id, ismovie } = useParams();
  const [DetailMovie, setDetailMovie] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
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
    <section>
      {DetailMovie && (
        <div className="min-h-screen bg-opacity-90 text-white">
          <div
            className="h-screen flex w-full bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('${process.env.REACT_APP_BASEIMGURL}${DetailMovie.poster_path}')`,
            }}>
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black opacity-100" />
            <div className="flex h-full w-full space-x-12 flex-row justify-center items-center">
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}${DetailMovie.poster_path}`}
                alt="No Way Up"
                className="w-64 rounded-md"
              />
              <div className="space-y-4  text-white">
                <h1 className="text-3xl font-semibold mt-14">
                  {DetailMovie.title}
                </h1>
                <div className="flex-row space-x-2">
                  {DetailMovie.genres.map((item, index) => (
                    <p
                      key={index}
                      className="border rounded-full inline-block px-4 text-center">
                      {item.name}
                    </p>
                  ))}
                </div>
                <h1 className="max-w-xl">{DetailMovie.overview}</h1>
                <h1 className="text-xl font-bold">Top Casts</h1>
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <div className="h-20 w-16 max-w-40 rounded-md bg-slate-400" />
                    <p className="mx-auto mt-2 text-opacity-50 line-clamp-2 w-16">
                      Aditya Ade
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="h-20 w-16 max-w-40 rounded-md bg-slate-400" />
                    <p className="mx-auto mt-2 text-opacity-50 line-clamp-2 w-16">
                      Maylida Dwi Chairunnisa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default DetailPage;
