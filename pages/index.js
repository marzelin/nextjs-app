import { compose } from "../lib/utils";
import withPosts from "../lib/withPosts";
import PostHead from "../components/PostHead";
import withLayout from "../lib/withLayout";

function index({ posts }) {
  const Posts = posts.map(post => <PostHead key={post.id} {...post} />);
  return Posts;
}

const withProviders = compose(withPosts, withLayout);

export default withProviders(index);
