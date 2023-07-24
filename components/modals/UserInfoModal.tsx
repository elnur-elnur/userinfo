import { Box, Modal, TextField } from "@mui/material";
import React, { useState } from "react";

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

const UserInfoModal = ({
  isOpenInfo,
  setOpenInfo,
}: {
  isOpenInfo: boolean;
  setOpenInfo: any;
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountryId] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Country:", country);
  };

  const handleClose = () => setOpenInfo(false);

  return (
    <Modal
      open={isOpenInfo}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-row mb-5 gap-4 items-center">
            <div className="text-lg font-['Montserrat'] font-semibold leading-[27px] text-[#32353d] w-[293px]">
              Основные данные
            </div>
            <img
              src="https://file.rendit.io/n/5RYcT8EFp8nsHuWCSkX0.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
          </div>
          <label
            htmlFor="userName"
            className="text-xs font-['Montserrat'] leading-[21.6px] text-[#8d94a6] self-start ml-3 w-6"
          >
            Имя
          </label>
          <TextField
            label="userName"
            id="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <label
            htmlFor="userSurname"
            className="text-xs font-['Montserrat'] leading-[21.6px] text-[#8d94a6] self-start ml-3 w-16"
          >
            Фамилия
          </label>
          <TextField
            id="userSurname"
            label="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
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
            <span className="text-center text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-white/30 w-20">
              Сохранить
            </span>
          </button>
          <button className="overflow-hidden flex flex-row gap-1 items-center">
            <img
              src="https://file.rendit.io/n/XBANYlfLq4fOXQO86Pxs.svg"
              className="min-h-0 min-w-0 w-4 shrink-0"
            />
            <span className="text-center whitespace-nowrap text-sm font-['Montserrat'] font-semibold tracking-[0.28] leading-[16.1px] text-[#3579f3] w-20 shrink-0">
              Шаг назад
            </span>
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserInfoModal;
