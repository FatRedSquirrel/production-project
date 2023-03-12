import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entitites/User";
import { USER_LOCALSTORAGE_KEY } from "shared/localstorage";
import { loginActions } from "features/AuthByUsername";

interface LoginByUsernameProps {
  username: string
  password: string
  onClose: () => void
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  "login/loginByUsername",
  async ({ username, password, onClose }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8000/login", { username, password });
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      thunkAPI.dispatch(loginActions.setUsername(""));
      thunkAPI.dispatch(loginActions.setPassword(""));
      onClose();
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("Не удалось авторизоваться");
    }
  }
);
