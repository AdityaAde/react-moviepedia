import axios from "axios";

export const trendService = async ({ isMovies }) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/trending/${
        isMovies ? "movie" : "tv"
      }/day`,
      {
        params: {
          language: "en-US",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const topRatedService = async ({ isMovies }) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/${isMovies ? "movie" : "tv"}/top_rated`,
      {
        params: {
          language: "en-US",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const detailMovie = async ({ isMovies, id }) => {
  const movie = isMovies === "true" ? true : false;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/${movie ? "movie" : "tv"}/${id}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
