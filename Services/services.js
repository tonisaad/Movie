import axios from 'axios';
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=310520f9138fec26edb1b88b57ae7956';
// Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${apiKey}`,
  );
  return resp.data.results;
};

// Get Upcoming Movies
export const getUpComingMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${apiKey}`,
  );
  return resp.data.results;
};

// Get Popular Tv Series
export const getPopularTv = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&${apiKey}`,
  );
  return resp.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  return resp.data.results;
};

// Get Documentaries
export const getDocumentaries = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
  );
  return resp.data.results;
};

export const getMovie = async id => {
  const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  return resp.data;
};

// Search movie and tv ny keyword
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};

export const playMovie = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
