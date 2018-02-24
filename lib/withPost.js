import withFetchedData from "./withFetchedData";

const BLOGGER_URL = process.env.BLOGGER_URL;
const API_KEY = process.env.API_KEY;

function createUrl({ query: { id } }) {
  return `${BLOGGER_URL}/posts/${id}?key=${API_KEY}`;
}

function transformData(post) {
  return { post };
}

export default withFetchedData(createUrl, transformData);
