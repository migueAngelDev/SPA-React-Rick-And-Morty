import { dataApi } from "../data/index";

export const getCharacters = async () => {
  let url = dataApi.api;
  const response = fetch(url)
    .then((res) => res.json())
    .then((users) => {
      return users.results;
    });

  return response;
};
