export function searchUrl(query) {
  return `https://restcountries.com/v2/name/${query}`;
}

export function regionUrl(region) {
  return `https://restcountries.com/v2/region/${region}`;
}

export function codeUrl(code) {
  return `https://restcountries.com/v2/alpha/${code}`;
}
