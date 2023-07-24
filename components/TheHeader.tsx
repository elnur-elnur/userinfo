"use client";

import React, { useEffect, useState } from "react";
import AuthModal from "./modals/AuthModal";
import auth from "@/store/auth";
import { observer } from "mobx-react-lite";
import { getCookie } from "@/helper/cookies";
import Nav from "./nav";
import TopHeader from "./nav/TopHeader";
import { axiosInstance } from "@/utils/axios";

const TheHeader = observer(() => {
  const [isVisibble, setisVisibble] = useState(false);
  const [open, setOpen] = useState(false);
  const [userInfo, setuserInfo] = useState<any>(null);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    axiosInstance.defaults.headers.common["Authorization"] =
      "Bearer " + getCookie("token");
  }, [getCookie("token")]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axiosInstance.get("/v1/user");
      } catch (error) {}
    };
    getUserInfo();
  }, [getCookie("token")]);

  useEffect(() => {
    setisVisibble(!isVisibble);
  }, [auth.loginModalS]);

  return (
    <header>
      <div className="bg-white self-stretch flex flex-col mb-px ml-px mr-0">
        <TopHeader />
        <div className="bg-white">
          <div className="container mx-auto flex flex-row gap-5 h-16 shrink-0 items-center">
            <Nav />
            {getCookie("token") ? (
              <div>
                {userInfo?.first_name !== null ? userInfo?.first_name : "Guest"}
              </div>
            ) : (
              <button
                onClick={handleOpen}
                className="border-solid border-[#3579f3] overflow-hidden flex flex-col justify-center h-10 px-5 border rounded 
              text-center whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px]
               text-[#3579f3] ml-auto"
              >
                Войти / Зарегиистрироваться
              </button>
            )}
          </div>

          <AuthModal isOpen={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
});

export default TheHeader;
