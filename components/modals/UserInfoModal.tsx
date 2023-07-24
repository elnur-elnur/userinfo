import React from "react";

const UserInfoModal = () => {
  <div className="shadow-[0px_0px_50px_16px_rgba(0,_0,_0,_0.2)] bg-white flex flex-col gap-1 w-full h-[425px] p-6 rounded-lg">
    <div className="flex flex-row mb-5 gap-4 items-center">
      <div className="text-lg font-['Montserrat'] font-semibold leading-[27px] text-[#32353d] w-[293px]">
        Основные данные
      </div>
      <img
        src="https://file.rendit.io/n/5RYcT8EFp8nsHuWCSkX0.svg"
        className="min-h-0 min-w-0 w-6 shrink-0"
      />
    </div>
    <div className="text-xs font-['Montserrat'] leading-[21.6px] text-[#8d94a6] self-start ml-3 w-6">
      Имя
    </div>
    <div className="bg-[#f4f6fb] flex flex-col justify-center mb-3 h-10 shrink-0 px-3 rounded">
      <div className="text-sm font-['Montserrat'] leading-[22.4px] text-[#8d94a6] mr-6">
        {" "}
      </div>
    </div>
    <div className="text-xs font-['Montserrat'] leading-[21.6px] text-[#8d94a6] self-start ml-3 w-16">
      Фамилия
    </div>
    <div className="bg-[#f4f6fb] flex flex-col justify-center mb-3 h-10 shrink-0 px-3 rounded">
      <div className="text-sm font-['Montserrat'] leading-[22.4px] text-[#8d94a6] mr-6">
        {" "}
      </div>
    </div>
    <div className="whitespace-nowrap text-xs font-['Montserrat'] leading-[21.6px] text-[#6d7589] self-start ml-3 w-32">
      Выберите ваш город
    </div>
    <div className="bg-[#f4f6fb] flex flex-row justify-center mb-3 gap-2 h-10 shrink-0 items-center rounded">
      <div className="text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d] w-[285px]">
        Красноярск
      </div>
      <img
        src="https://file.rendit.io/n/VzhOVncpf7pJUHe3KpXC.svg"
        className="min-h-0 min-w-0 w-4 shrink-0"
      />
    </div>
    <button className="overflow-hidden bg-[rgba(53,_121,_243,_0.3)] flex flex-col justify-center mb-3 h-10 shrink-0 items-center rounded">
      <button className="text-center text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white/30 w-20">
        Сохранить
      </button>
    </button>
    <button className="overflow-hidden flex flex-row gap-1 items-center">
      <img
        src="https://file.rendit.io/n/XBANYlfLq4fOXQO86Pxs.svg"
        className="min-h-0 min-w-0 w-4 shrink-0"
      />
      <button className="text-center whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-[#3579f3] w-20 shrink-0">
        Шаг назад
      </button>
    </button>
  </div>;
};

export default UserInfoModal;
