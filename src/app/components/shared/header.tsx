import { Button } from "@mantine/core";
import Link from "next/link";
import SearchBar from "./searchbar";

const Header = () => {
  return (
    <>
      <Button component={Link} href="/">
        HOME
      </Button>
      <SearchBar />
      <Button component={Link} href="/login">
        LOGIN
      </Button>
      {/* <Button component={Link} href="/">
        HOME
      </Button>
      <Button component={Link} href="/about">
        ABOUT
      </Button>
      <Button component={Link} href="/blogs">
        BLOGS
      </Button>
      <Button component={Link} href="/cv">
        CV
      </Button>
      <Button component={Link} href="/portfolios">
        PORTFOLIOS
      </Button> */}
    </>
  );
};
export default Header;
