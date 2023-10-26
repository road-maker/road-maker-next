import { Button } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SearchBar from "./searchbar";

const Header = () => {
  const { data: session } = useSession();
  if (session)
    return (
      <>
        <nav className="nav">
          <Button component={Link} href="/">
            HOME
          </Button>
          <SearchBar />
          <Button component={Link} href={`/users/mypage/`}>
            {/* {session.user.email} */} 마이페이지
          </Button>
          <Button onClick={() => signOut()}>LOGOUT</Button>
        </nav>
      </>
    );
  else
    return (
      <>
        <nav className="nav">
          <Button component={Link} href="/">
            HOME
          </Button>
          <SearchBar />
          <Button
            component={Link}
            href="/users/signin"
            onClick={() => signIn()}
          >
            LOGIN
          </Button>
        </nav>
      </>
    );
};
export default Header;
