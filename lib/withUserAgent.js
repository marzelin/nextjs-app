function withUserAgent(WrappedComponent) {
  function UserAgentProvider(props) {
    return <WrappedComponent {...props} />;
  }

  UserAgentProvider.getInitialProps = async ctx => {
    const { req } = ctx;
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};

    return {
      ...wrappedComponentInitialProps,
      userAgent
    };
  };

  return UserAgentProvider;
}

export default withUserAgent;
