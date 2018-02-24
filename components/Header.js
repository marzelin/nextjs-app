import React from "react";
import AppBar from "material-ui/AppBar";
import Link from "./Link";

function Header() {
  return (
    <Link href={"/"} as={"/blog"}>
      <AppBar title="Next.js App" showMenuIconButton={false} />
    </Link>
  );
}

export default Header;
