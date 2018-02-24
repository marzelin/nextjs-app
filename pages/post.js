import Card from "../components/Card";
import { CardTitle, CardText } from "material-ui";
import withPost from "../lib/withPost";
import { Fragment } from "react";
import { compose } from "../lib/utils";
import withLayout from "../lib/withLayout";

function Post({ post: { title, content } }) {
  return (
    <Fragment>
      <Card>
        <CardTitle {...{ title }} />
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </CardText>
      </Card>
    </Fragment>
  );
}

const withProviders = compose(withPost, withLayout);

export default withProviders(Post);
