"use client";

import React, { useEffect, useState } from "react";
import AuthModal from "./modals/AuthModal";
import auth from "@/store/auth";
import { observer } from "mobx-react-lite";
import { getCookie } from "@/helper/cookies";
import Nav from "./nav";
import TopHeader from "./nav/TopHeader";
import { axiosInstance } from "@/utils/axios";
import UserInfoModal from "./modals/UserInfoModal";

interface UserIn {
  birthday: string | null;
  city: any;
  first_name: string | null;
  has_required_data: boolean;
  id: number;
  last_name: string | null;
  middle_name: string | null;
  phone: string;
  photo: string | null;
  sex: string | null;
}

const TheHeader = observer(() => {
  const [isVisibble, setisVisibble] = useState(false);
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [userInfo, setuserInfo] = useState<any>(null);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    if (getCookie("token") !== "") {
      const getUserInfo = async () => {
        try {
          const { data } = await axiosInstance.get("/v1/user", {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
            },
          });

          setuserInfo(data);
        } catch (error) {}
      };
      getUserInfo();
    }
  }, [getCookie("token")]);

  useEffect(() => {
    setisVisibble(!isVisibble);
  }, [auth.loginModalS]);

  useEffect(() => {
    userInfo?.first_name === null && setOpenInfo(true);
  }, [userInfo]);

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

          {!getCookie("token") && <AuthModal isOpen={open} setOpen={setOpen} />}

          {userInfo?.first_name === null && (
            <UserInfoModal isOpenInfo={openInfo} setOpenInfo={setOpenInfo} />
          )}
        </div>
      </div>
    </header>
  );
});

export default TheHeader;
