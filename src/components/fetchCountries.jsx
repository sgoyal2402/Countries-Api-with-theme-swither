export function searchUrl(query) {
  return `https://restcountries.eu/rest/v2/name/${query}`;
}

export function regionUrl(region) {
  return `https://restcountries.eu/rest/v2/region/${region}`;
}

export function codeUrl(code) {
  return `https://restcountries.eu/rest/v2/alpha/${code}`;
}
