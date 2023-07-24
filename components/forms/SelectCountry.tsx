import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { axiosInstance } from "@/utils/axios";
import { Chip, OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface ICity {
  district: string;
  id: number;
  rating: number;
  region: string;
  title: string;
  title_alternative: string;
  tz: string;
  tz_delta: number;
}

const getPost = async (): Promise<any> => {
  const response = await axiosInstance.get("/v1/city");
  return response.data.data;
};

const SelectCountry = ({ value, onChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost();
        if (Array.isArray(data)) {
          setOptions(data);
        } else {
          console.error("Неверный формат данных, полученных из API");
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  const [city, setCity] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
    onChange(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          displayEmpty
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>Выберите страну</p>;
            }

            return selected;
          }}
          onChange={handleChange}
        >
          {options.length > 0 ? (
            options.map((item: ICity) => (
              <MenuItem value={item.title} key={item.id}>
                {item.title}
              </MenuItem>
            ))
          ) : (
            <div>Загрузка...</div>
          )}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCountry;
