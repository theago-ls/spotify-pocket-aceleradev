export const obterUsuario = (token, tokenType) => {
  return fetch("https://api.spotify.com/v1/me", {
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
