import React from "react";
import "isomorphic-fetch";

/**
 *
 * @param {(ctx) => string} createUrl
 * @param {(data) => object} transformData
 */
function withFetchedData(createUrl, transformData = defaultTransformData) {
  return WrappedComponent => {
    function FetchedDataProvider(props) {
      return <WrappedComponent {...props} />;
    }

    FetchedDataProvider.getInitialProps = async ctx => {
      const url = createUrl(ctx);
      const fetchedDataPromise = fetch(url).then(response => response.json());

      const wrappedComponentInitialPropsPromise = WrappedComponent.getInitialProps
        ? WrappedComponent.getInitialProps(ctx)
        : {};

      const [wrappedComponentInitialProps, data] = await Promise.all([
        wrappedComponentInitialPropsPromise,
        fetchedDataPromise
      ]);

      return {
        ...wrappedComponentInitialProps,
        ...transformData(data)
      };
    };

    return FetchedDataProvider;
  };
}

function defaultTransformData(data) {
  return { data };
}

export default withFetchedData;
