import Card from "../components/Card";
import { CardTitle, CardText } from "material-ui";
import withPost from "../lib/withPost";
import { Fragment } from "react";
import Header from "../components/Header";
import { compose } from "../lib/utils";
import withMaterialUi from "../lib/withMaterialUi";

function Post({ post: { title, content } }) {
  return (
    <Fragment>
      <Header />
      <Card>
        <CardTitle {...{ title }} />
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </CardText>
      </Card>
    </Fragment>
  );
}

const withProviders = compose(withPost, withMaterialUi);

export default withProviders(Post);
