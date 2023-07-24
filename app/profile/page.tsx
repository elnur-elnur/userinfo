import ProfileForm from "@/components/profile/ProfileForm";
import React from "react";

const Profile = () => {
  return (
    <div className="bg-[#f4f6fa]">
      <div className="container mx-auto flex flex-col gap-8 w-full items-start">
        <div className="flex flex-row items-center">
          <div className="text-xs font-['Montserrat'] leading-[16.8px] text-[#8d94a6] w-12 shrink-0">
            Главная
          </div>
          <img
            src="https://file.rendit.io/n/j8f2ZB9Pp27L1JucCWAx.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="whitespace-nowrap text-xs font-['Montserrat'] leading-[16.8px] text-[#8d94a6] w-24 shrink-0">
            Личный кабинет
          </div>
          <img
            src="https://file.rendit.io/n/j8f2ZB9Pp27L1JucCWAx.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="whitespace-nowrap text-xs font-['Montserrat'] leading-[16.8px] text-[#8d94a6] w-32 shrink-0">
            Настройки аккаунта
          </div>
        </div>
        <div className="whitespace-nowrap text-3xl font-['Montserrat'] font-semibold tracking-[0.64] leading-[41.6px] text-[#32353d] w-[362px] mb-2">
          Настройки аккаунта
        </div>
        <div className="flex flex-row w-full mb-16 gap-5 items-center">
          <div className="border-solid border-[#d1d4db] self-start flex flex-col mt-6 gap-3 h-[204px] py-2 border-t-0 border-b border-x-0">
            <div className="flex flex-row gap-2 items-center mb-1 mx-3">
              <img
                src="https://file.rendit.io/n/XJvTs0RuxyhWJGo3CdBw.png"
                className="min-h-0 min-w-0 w-10 shrink-0"
              />
              <div className="font-['Montserrat'] font-semibold leading-[24px] text-[#32353d] self-start mt-0 w-[206px]">
                Смирнов Владимир
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/Z28mYHPZU5ri6ujGiHz3.svg"
              className="min-h-0 min-w-0 self-center"
            />
            <div className="self-start flex flex-row gap-2 w-32 items-center mb-2 ml-6">
              <img
                src="https://file.rendit.io/n/TvCkgyBVuUs9PUNCaQ8A.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div className="text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-[#535b71] w-24">
                Уведомления
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center ml-6 mr-16">
              <img
                src="https://file.rendit.io/n/yCFZ5hFOJmvs26LfKqJ4.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div className="whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-[#535b71] w-40">
                Служба поддержки
              </div>
            </div>
            <div className="bg-[#e6efff] flex flex-row ml-3 gap-2 h-10 shrink-0 items-center px-3 rounded-lg">
              <img
                src="https://file.rendit.io/n/9dmQ2oUHLE1dj2vB3XL0.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div className="whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-[#32353d] w-2/3">
                Настройки аккаунта
              </div>
            </div>
          </div>
          <div className="bg-white w-full flex flex-col rounded-lg p-10">
            <div className="whitespace-nowrap text-2xl font-['Montserrat'] font-semibold tracking-[0.24] leading-[33.6px] text-[#32353d] self-start mb-8 w-[267px]">
              Настройки аккаунта
            </div>

            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
