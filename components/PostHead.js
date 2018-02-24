import React from "react";
import Card from "./Card";
import { CardTitle } from "material-ui";
import Link from "./Link";

function PostHead({ title, id }) {
  return (
    <Link href={`/post?id=${id}`} as={`/blog/${id}`}>
      <Card>
        <CardTitle {...{ title }} />
      </Card>
    </Link>
  );
}

export default PostHead;
