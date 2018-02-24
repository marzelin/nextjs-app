import withFetchedData from "./withFetchedData";

export default withFetchedData(createUrl, transformData);

const bloggerUrl = process.env.BLOGGER_URL;
const apiKey = process.env.API_KEY;
const url = `${bloggerUrl}/posts?key=${apiKey}&fields=items(title,id)`;

function createUrl() {
  return url;
}

function transformData({ items: posts }) {
  return { posts };
}
