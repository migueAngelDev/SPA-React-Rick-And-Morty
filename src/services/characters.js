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

export const getCharacter = async (id) => {
  try {
    let url = dataApi.api;
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("getCharacter", err);
  }
};
