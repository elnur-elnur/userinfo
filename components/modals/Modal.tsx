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
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCT = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {children}
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
    // <div className="fixed top-1/2 left-1/2 w-auto -translate-x-1/2 -translate-y-1/2  shadow-[0px_0px_50px_16px_rgba(0,_0,_0,_0.2)] bg-white flex flex-col gap-1 p-6 rounded-lg max-w-[380px]">

    // </div>
  );
};

export default ModalCT;
