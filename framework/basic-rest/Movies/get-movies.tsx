// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import axios from "axios";
import { useQuery } from "react-query";

export const fetchMovies = async () => {
	const { data } = await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=1`);
	return data;
};
export const useMoviesQuery = () => {
	return useQuery<any, Error>("Get Movies", () =>
		fetchMovies()
	);
};
