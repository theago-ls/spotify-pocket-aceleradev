export const obterCategorias = (token, tokenType) => {
  return fetch("https://api.spotify.com/v1/browse/categories", {
    method: "GET",
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return null;
    });
};

export const obterPlaylists = (token, tokenType, url) => {
  return fetch(url + "/playlists", {
    method: "GET",
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return null;
    });
};
