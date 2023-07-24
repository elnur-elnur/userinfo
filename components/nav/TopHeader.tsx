import React from "react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="bg-[#3579f3] ">
      <div className="container flex flex-row gap-10 h-12 shrink-0 items-center mx-auto">
        <Link
          href="/"
          className="overflow-hidden flex flex-row mr-[860px] gap-1 items-center"
        >
          <img
            src="https://file.rendit.io/n/nyGehuPmkXQ3B3AUO3sQ.svg"
            className="min-h-0 min-w-0 w-4 shrink-0"
          />
          <span className="text-center text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white w-24">
            Красноярск
          </span>
        </Link>
        <div className="ml-auto">
          <Link
            href="/"
            className="font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white"
          >
            О проекте
          </Link>
          <Link
            href="/"
            className="font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white ml-10"
          >
            Блог
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
