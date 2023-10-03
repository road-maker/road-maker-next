import { Button } from "@mantine/core";
import Link from "next/link";

const Footer = () => {
  return (
    <Button component={Link} href="/">
      Home
    </Button>
  );
};
export default Footer;
