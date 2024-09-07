import Image from "next/image";
import styles from "./header.module.css";
import Nav from "./Nav";
const Header = ({
  setIsExpanded,
}: {
  setIsExpanded: (value: boolean) => void;
}) => {
  return (
    <header>
      <div className="w-full lg:w-[1440px] lg:mx-auto flex justify-between items-center px-8 py-10">
        <Image
          src={"/images/logo-bookmark.svg"}
          width={149}
          height={25}
          alt="logo"
        />
        <Image
          src={"/images/icon-hamburger.svg"}
          width={18}
          height={15}
          alt="hamburger menu icon"
          onClick={() => setIsExpanded(true)}
          className="cursor-pointer lg:hidden"
        />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
