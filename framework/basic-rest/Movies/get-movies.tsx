// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useInfiniteQuery } from "react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";

export type MovieType = {
	id: number,
	title: string,
	poster_path: string
	overview: string,
	release_date: string
}

export const fetchMovies = async ({pageParam = 1}) => {
	const { data } = await http.get(`${API_ENDPOINTS.discover}?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${pageParam}`);
	return data.results;
};
export const useMoviesQuery = () => {
	return useInfiniteQuery<MovieType, Error>(
	["Get Movies"],
	 fetchMovies, {
		getNextPageParam: (_lastPage, pages) => {
			return pages.length + 1;
		}
	});
};
