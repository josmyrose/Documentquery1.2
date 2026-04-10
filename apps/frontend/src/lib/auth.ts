export function setToken(token: string) {
  document.cookie = `token=${token}; path=/;`;
}

export function getToken() {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];
}

export function removeToken() {
  document.cookie = "token=; Max-Age=0; path=/;";
}
export function isAuthenticated() {
  if (typeof document === "undefined") return false;

  return document.cookie.includes("token=");
}