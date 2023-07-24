import Link from "next/link";
import React from "react";

const MessageModal = () => {
  <div className="shadow-[0px_0px_50px_16px_rgba(0,_0,_0,_0.2)] bg-white flex flex-col gap-2 w-full pt-4 pb-6 px-6 rounded-lg">
    <img
      src="https://file.rendit.io/n/JyDdPw2WvBvr8oK7WDzw.svg"
      className="min-h-0 min-w-0 self-center w-16"
    />
    <div className="text-center text-lg font-['Montserrat'] font-semibold leading-[27px] text-[#32353d] mb-4">
      Вы успешно зарегистрировались
    </div>
    <div className="text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d] mb-4">
      Для более эффективного использования ресурса, рекомендуем заполнить
      профиль.
    </div>
    <button className="flex flex-col mr-1 gap-4">
      <button className="overflow-hidden bg-[#3579f3] flex flex-col justify-center h-10 shrink-0 items-center rounded">
        <Link
          href="/profile"
          className="text-center whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white w-1/2"
        >
          Заполнить профиль
        </Link>
      </button>
      <button className="border-solid border-[#3579f3] overflow-hidden flex flex-col justify-center h-10 shrink-0 items-center border rounded">
        <button className="text-center text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-[#3579f3] w-24">
          Пропустить
        </button>
      </button>
    </button>
  </div>;
};

export default MessageModal;
