import axios from "axios";

const movieTrendService = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/trending/movie/day`,
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

export default movieTrendService;
