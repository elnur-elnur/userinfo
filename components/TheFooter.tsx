import React from "react";

const TheFooter = () => {
  return (
    <footer>
      <div className="bg-white self-stretch flex flex-col justify-center ml-0 h-32 shrink-0 items-center">
        <div className="text-xs font-['Montserrat'] leading-[16.8px] text-[#8d94a6] w-3/5">
          © 2023
          <br />
          <div className="text-sm tracking-[0.28] leading-[22.4px] contents">
            Сделано в Лаконизм
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
