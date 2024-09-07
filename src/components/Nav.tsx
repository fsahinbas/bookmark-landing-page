import Link from "next/link";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-12 items-center">
        <li>
          <Link
            href="/features"
            className="uppercase text-[13px] tracking-[1.5px] leading-[17px] text-[var(--dark-blue)] hover:text-[var(--soft-red)]"
          >
            features
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="uppercase text-[13px] tracking-[1.5px] leading-[17px] text-[var(--dark-blue)] hover:text-[var(--soft-red)]"
          >
            pricing
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="uppercase text-[13px] tracking-[1.5px] leading-[17px] text-[var(--dark-blue)] hover:text-[var(--soft-red)]"
          >
            contact
          </Link>
        </li>
        <li className="py-2 px-9 bg-[var(--soft-red)] rounded-md hover:bg-white text-white cursor-pointer border-[1px] border-[var(--soft-red)] hover:text-[var(--soft-red)]">
          <Link
            href="/login"
            className="uppercase text-[13px] tracking-[1.5px] leading-[17px]"
          >
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
