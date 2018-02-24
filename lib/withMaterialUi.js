import { compose } from "./utils";
import withUserAgent from "./withUserAgent";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";
import { Fragment } from "react";
import Head from "next/head";

function withMaterialUi(WrappedComponent) {
  function MaterialUiProvider(props) {
    const { userAgent } = props;
    const muiTheme = getMuiTheme({ userAgent });

    return (
      <Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <MuiThemeProvider muiTheme={muiTheme}>
          <WrappedComponent {...props} />
        </MuiThemeProvider>
      </Fragment>
    );
  }

  MaterialUiProvider.getInitialProps = WrappedComponent.getInitialProps;

  return MaterialUiProvider;
}

export default compose(withUserAgent, withMaterialUi);
