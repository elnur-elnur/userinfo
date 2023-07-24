"use client";
import { getCookie } from "@/helper/cookies";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden bg-[#f4f6fa] flex flex-col gap-8 w-full items-start">
        <div className="flex flex-row ml-[375px] w-20 items-center">
          <div className="text-xs font-['Montserrat'] leading-[16.8px] text-[#8d94a6] w-12">
            Главная
          </div>
          <img
            src="https://file.rendit.io/n/k9gkkcjnrR1q2ZoKjeVP.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
        </div>
        <div className="text-3xl font-['Montserrat'] font-semibold tracking-[0.64] leading-[41.6px] text-[#32353d] w-[139px] mb-2 ml-[375px]">
          Главная
        </div>

        <div className="bg-white self-center flex flex-col justify-center mb-[401px] w-3/5 h-56 shrink-0 items-center rounded-lg">
          {getCookie("token") ? (
            <h2>Welcome to Board</h2>
          ) : (
            <button className="overflow-hidden bg-[#3579f3] flex flex-col justify-center h-12 shrink-0 px-6 rounded">
              <span className="text-center font-['Montserrat'] font-semibold tracking-[0.32] leading-[20px] text-white">
                Авторизация
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
