import axios from "axios";
import { Photo } from "./components/App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com";

interface FetchPhotosResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const fetchPhotos = async (
  query: string,
  currentPage: number
): Promise<FetchPhotosResponse> => {
  const res = await axios.get<FetchPhotosResponse>("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 6,
      client_id: "-uYoHOD63uF_b8Rp-QpW9hqs1_4oaCflWpVqGS2_M3Y",
    },
  });

  return res.data;
};