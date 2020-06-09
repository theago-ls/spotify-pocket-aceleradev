export const config = {
  spotify: {
    authorizationURL: "https://accounts.spotify.com/authorize",
    clientId: "e7c57fa6367e4eed846e5b1ea5566ee6",
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: "https://api.spotify.com/v1",
    scopes: ["user-read-email", "user-read-private", "streaming"],
  },
};
