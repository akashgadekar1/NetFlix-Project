import { HTTPInstance } from "../utils/https-instance";

const apiKey = "?api_key=2321281208f9b141fc735aa7047d4892";

export const doGetReleseMovieApi = async () => {
  return await HTTPInstance.get("trending/movie/day" + apiKey);
};
