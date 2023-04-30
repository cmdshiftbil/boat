import Link from "next/link";
import Logo from "../Logo";
import Navigation from "../Navigation";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  return <Navigation />;

  return (
    <HeaderWrapper>
      <Link href="/" className="font-bold ">
        <Logo />
      </Link>

      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
