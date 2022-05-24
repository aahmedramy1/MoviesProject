// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import axios from "axios";
import { useQuery } from "react-query";

export const fetchConfiguration = async () => {
	const  {data}  = await axios.get(`http://api.themoviedb.org/3/configuration?api_key=acea91d2bff1c53e6604e4985b6989e2`);
	return data;
};
export const useConfigurationQuery = () => {
	return useQuery<any, Error>("Get Configuration", () =>
		fetchConfiguration()
	);
};
