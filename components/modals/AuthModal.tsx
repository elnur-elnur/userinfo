"use client";

import auth from "@/store/auth";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--neutrals-white, #FFF)",
  boxShadow: "0px 0px 50px 16px rgba(0, 0, 0, 0.20)",
  p: 4,
  borderRadius: 2,
};

const AuthModal = ({ isOpen, setOpen }: { isOpen: boolean; setOpen: any }) => {
  const [usedId, setusedId] = useState(0);

  async function handleSubmitPhone(event: any) {
    event.preventDefault();

    await auth.setLoginState(String(event.target.phone.value));

    setusedId(auth.userId);
  }

  async function handleSubmitConfirm(event: any) {
    if (event === "1111") {
      await auth.setConfirmUser(event);
    }
  }

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmitPhone}>
          <div className="flex flex-row mb-5 gap-4 items-center">
            <div className="text-lg font-['Montserrat'] font-semibold leading-[27px] text-[#32353d] w-[293px]">
              Вход / Регистрация
            </div>
            <button onClick={() => setOpen(false)}>
              <img
                src="https://file.rendit.io/n/zzVb0QiGMUjY1EKRRwIc.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
            </button>
          </div>
          <label
            htmlFor="phone"
            className="text-xs font-['Montserrat'] leading-[21.6px] text-[#8d94a6] self-start ml-3 w"
          >
            Телефон
          </label>

          <input
            id="phone"
            type="text"
            autoComplete="off"
            className="bg-[#f4f6fb] flex flex-col justify-center mb-3 h-10 shrink-0 px-3 rounded text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d] mr-6 w-full"
          />

          <button
            type="submit"
            className="overflow-hidden bg-[#3579f3] flex flex-col justify-center mb-5 h-10 shrink-0 px-16 rounded w-full"
          >
            <span className="text-center whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white">
              Подтвердить номер телефона
            </span>
          </button>
        </form>
        {usedId !== 0 && (
          <form onSubmit={handleSubmitConfirm}>
            <label
              htmlFor="confirmCode"
              className="whitespace-nowrap text-xs font-['Montserrat'] leading-[21.6px] text-[#8d94a6] ml-3 mr-6"
            >
              Последние 4 цифры номера входящего звонка
            </label>

            <input
              id="confirmCode"
              autoComplete="off"
              type="number"
              required
              minLength={2}
              maxLength={4}
              onChange={(e) => handleSubmitConfirm(e.target.value)}
              className="border-solid border-[#ff0000] bg-[#f4f6fb] flex flex-col h-10 shrink-0 px-3 py-2 border rounded text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d] mr-6 w-full"
            />

            <div className="whitespace-nowrap text-xs font-['Montserrat'] leading-[21.6px] text-[#ff0000] mb-4 ml-3 mr-1">
              Код подтверждения некорректен или просрочен.{" "}
            </div>
            {/* <button
          type="submit"
          className="overflow-hidden bg-[#3579f3] flex flex-col justify-center mb-5 h-10 shrink-0 px-16 rounded w-full"
        >
          <span className="text-center whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white">
            Запросить звонок повторно
          </span>
        </button> */}
          </form>
        )}

        <div className="text-xs font-['Montserrat'] leading-[16.8px] text-[#6d7589]">
          Нажимая кнопку «Подтвердить номер телефона», я даю свое согласие на
          сбор и обработку моих персональных данных в соответствии с{" "}
          <div className="text-[#3579f3] contents">Политикой</div>
          <div className="contents"> и принимаю условия </div>
          <div className="text-[#3579f3] contents">
            Пользовательского соглашения
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AuthModal;
