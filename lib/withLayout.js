import { compose } from "./utils";
import withMaterialUi from "./withMaterialUi";
import Layout from "../components/Layout";

function withLayout(WrappedComponent) {
  function LayoutProvider(props) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  }

  LayoutProvider.getInitialProps = WrappedComponent.getInitialProps;

  return LayoutProvider;
}

export default compose(withMaterialUi, withLayout);
