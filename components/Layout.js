import { Fragment } from "react";
import Head from "./Head";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Fragment>
      <Head />
      <Header />
      {children}
    </Fragment>
  );
}

export default Layout;
