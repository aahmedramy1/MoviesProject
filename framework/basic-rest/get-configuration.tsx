import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import http from "../utils/http";

type imagesConfigurationType = {
	base_url: string
}

export type ConfigurationType = {
	images: imagesConfigurationType
}

export const fetchConfiguration = async () => {
	const  {data}  = await http.get(`${API_ENDPOINTS.configuration}?api_key=acea91d2bff1c53e6604e4985b6989e2`);
	return data;
};
export const useConfigurationQuery = () => {
	return useQuery<ConfigurationType, Error>(["Get Configuration"], () =>
		fetchConfiguration()
	);
};
