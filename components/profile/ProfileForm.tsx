"use client";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SelectCountry from "../forms/SelectCountry";
import cities from "@/store/cities";
import { OutlinedInput } from "@mui/material";

const ProfileForm = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (newValue) => {
    setSelectedCountry(newValue);
  };

  return (
    <form>
      <div className="flex flex-row mb-10 gap-5 items-center">
        <div className="border-dashed border-[#3579f3] flex flex-col justify-center mb-px h-48 px-3 border rounded-lg">
          <div className="text-center text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#397bf2] ml-px">
            Загрузите фото
          </div>
        </div>
        <div className="self-end flex flex-col gap-3 w-full h-48">
          <div className="border-solid border-[#e8eaed] mb-px h-px shrink-0 border-t border-b-0 border-x-0" />
          <div className="flex flex-row gap-6 items-center">
            <label
              htmlFor="lastname"
              className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-20 shrink-0"
            >
              Фамилия
            </label>

            <input
              id="lastname"
              placeholder="lastname"
              type="text"
              className="bg-[#f4f6fa] flex flex-col justify-center w-full h-10 px-3 rounded text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d]"
            />
          </div>
          <div className="border-solid border-[#e8eaed] mb-px h-px shrink-0 border-t border-b-0 border-x-0" />
          <div className="flex flex-row gap-6 items-center">
            <label
              htmlFor="firstname"
              className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-20 shrink-0"
            >
              Имя
            </label>

            <input
              type="text"
              placeholder="firstname"
              id="firstname"
              className="bg-[#f4f6fa] flex flex-col justify-center w-full h-10 px-3 rounded text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d]"
            />
          </div>
          <div className="border-solid border-[#e8eaed] mb-px h-px shrink-0 border-t border-b-0 border-x-0" />
          <div className="flex flex-row gap-6 items-center">
            <label
              htmlFor="surname"
              className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-20 shrink-0"
            >
              Отчество
            </label>

            <input
              id="surname"
              placeholder="surname"
              type="text"
              className="text-sm font-['Montserrat'] leading-[22.4px] text-[#6d7589] bg-[#f4f6fa] flex flex-col justify-center w-full h-10 px-3 rounded"
            />
          </div>
        </div>
      </div>
      <div className="border-solid border-[#e8eaed] mb-4 h-px shrink-0 border-t border-b-0 border-x-0" />
      <div className="flex flex-row mb-3 gap-5 items-center">
        <div className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-[237px] shrink-0">
          Пол
        </div>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">Выберите пол</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            displayEmpty
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <p>Выберите пол</p>;
              }

              return selected;
            }}
            className="bg-[#f4f6fa] flex flex-col justify-center w-full h-10 px-3 rounded text-sm font-['Montserrat'] leading-[22.4px] text-[#32353d]"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="man">man</MenuItem>
            <MenuItem value="women">women</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="border-solid border-[#e8eaed] mb-4 h-px shrink-0 border-t border-b-0 border-x-0" />
      <div className="flex w-full flex-row mb-3 gap-5 items-center">
        <div className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-[237px] shrink-0">
          Дата рождения
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="border-solid border-[#e8eaed] mb-4 h-px shrink-0 border-t border-b-0 border-x-0" />
      <div className="flex flex-row mb-3 gap-5 items-center">
        <div className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-[237px] shrink-0">
          Город
        </div>

        <SelectCountry value={selectedCountry} onChange={handleCountryChange} />
      </div>
      <div className="border-solid border-[#e8eaed] mb-4 h-px shrink-0 border-t border-b-0 border-x-0" />
      <div className="flex flex-row mb-3 gap-5 items-center">
        <div className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-[237px] shrink-0">
          Адрес
        </div>
        <div className="bg-[#f4f6fa] flex flex-col justify-center w-[535px] h-10 px-3 rounded">
          <div className="text-sm font-['Montserrat'] leading-[22.4px] text-[#6d7589]">
            Ввведите адрес
          </div>
        </div>
      </div>
      <div className="border-solid border-[#e8eaed] mb-4 h-px shrink-0 border-t border-b-0 border-x-0" />
      <div className="flex flex-row mb-8 gap-5 items-center">
        <div className="text-sm font-['Montserrat'] font-semibold leading-[22.4px] text-[#32353d] self-start w-[237px] shrink-0">
          Телефон
        </div>
        <div className="bg-[#e8eaed] flex flex-col justify-center w-[535px] h-10 px-3 rounded">
          <div className="text-sm font-['Montserrat'] leading-[22.4px] text-[#a4a9b8]">
            +7 (999) 665-56-56
          </div>
        </div>
      </div>
      <button className="overflow-hidden bg-[rgba(53,_121,_243,_0.3)] self-center flex flex-col justify-center h-12 shrink-0 px-6 rounded">
        <span className="text-center font-['Montserrat'] font-semibold tracking-[0.32] leading-[20px] text-white/30">
          Сохранить
        </span>
      </button>
    </form>
  );
};

export default ProfileForm;
