import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <Link
        href="/profile"
        className="whitespace-nowrap font-['Montserrat'] font-semibold leading-[25.6px] text-[#32353d] w-16 shrink-0"
      >
        Пункт 1
      </Link>
      <Link
        href="/"
        className="whitespace-nowrap font-['Montserrat'] font-semibold leading-[25.6px] text-[#32353d] w-16 shrink-0"
      >
        Пункт 2
      </Link>
      <Link
        href="/"
        className="whitespace-nowrap font-['Montserrat'] font-semibold leading-[25.6px] text-[#32353d] w-16 shrink-0"
      >
        Пункт 3
      </Link>
      <Link
        href="/"
        className="whitespace-nowrap font-['Montserrat'] font-semibold leading-[25.6px] text-[#32353d] mr-[556px] w-16 shrink-0"
      >
        Пункт 4
      </Link>
    </>
  );
};

export default Nav;
