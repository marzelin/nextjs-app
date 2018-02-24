import React, { Fragment } from "react";
import Head from "../components/Head";
import withMaterialUi from "../lib/withMaterialUi";
import Header from "../components/Header";
import { compose } from "../lib/utils";
import withPosts from "../lib/withPosts";
import PostHead from "../components/PostHead";

function index({ posts }) {
  const Posts = posts.map(post => <PostHead key={post.id} {...post} />);

  return (
    <Fragment>
      <Head />
      <Header />
      {Posts}
    </Fragment>
  );
}

const withProviders = compose(withPosts, withMaterialUi);

export default withProviders(index);
