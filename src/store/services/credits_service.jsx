import axios from "axios";

export const creditsMovie = async ({ isMovies, id }) => {
  const movie = isMovies === "true" ? true : false;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/${
        movie ? "movie" : "tv"
      }/${id}/credits`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
