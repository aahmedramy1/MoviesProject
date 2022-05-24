// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

export const fetchMovies = async ({pageParam = 1}) => {
	const { data } = await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${pageParam}`);
	return data.results;
};
export const useMoviesQuery = () => {
	return useInfiniteQuery<any, Error>(
	["Get Movies"],
	 fetchMovies, {
		getNextPageParam: (_lastPage, pages) => {
			return pages.length + 1;
		}
	});
};
