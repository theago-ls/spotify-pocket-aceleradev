export const obterTracks = (token, tokenType, url) => {
  return fetch(url, {
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
