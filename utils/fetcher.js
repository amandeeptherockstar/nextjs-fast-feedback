const fetcher = (...props) =>
  fetch(...props).then((response) => response.json());

export { fetcher };
