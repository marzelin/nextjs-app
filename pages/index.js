import React, { Fragment } from "react";
import Head from "../components/Head";
import withMaterialUi from "../lib/withMaterialUi";
import Header from "../components/Header";

function index() {
  return (
    <Fragment>
      <Head />
      <Header />
    </Fragment>
  );
}

export default withMaterialUi(index);
