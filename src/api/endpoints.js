const API_KEY = "92365b48-b144-487b-a147-79a326421a4a";

export function getNewsCategoryEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `api-key=${API_KEY}&section=${category}&page-size=${pageSize}&page=${pageNumber}&show-fields=all`;

  return `https://content.guardianapis.com/search?${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `${newsId}?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${queryParams}`;
}
