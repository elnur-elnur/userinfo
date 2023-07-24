import { makeAutoObservable, runInAction } from "mobx";
import { axiosInstance } from "../utils/axios";
import Router from "next/router";
import { setCookie } from "../helper/cookies";

export interface IResponseState<T> {
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  data: T;
}

export interface IUser {
  id: number;
  first_name: null | string;
  last_name: null | string;
  has_required_data: boolean;
}

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  // Private
  private _isPending: boolean = false;
  private _userId: number = 0;
  private _user: any = null;
  private _loginModalS: boolean = true;

  // Getter
  get isPending(): boolean {
    return this._isPending;
  }
  get userId(): number {
    return this._userId;
  }
  get user(): IUser {
    return this._user;
  }
  get loginModalS(): boolean {
    return this._loginModalS;
  }

  // Setter
  setPending(pending: boolean) {
    this._isPending = pending;
  }
  setUserId(userId: number) {
    this._userId = userId;
  }
  setUser(userData: IUser) {
    this._user = userData;
  }
  setLoginModalS(type: boolean) {
    this._loginModalS = type;
  }

  async setLoginState(phone: string) {
    this.setPending(true);

    try {
      const { data } = await axiosInstance.post("/v1/login/request", {
        phone: phone,
      });

      this.setUserId(data.id);
      this.setPending(false);
    } catch (error) {
      console.log("error", error?.message);
    } finally {
      this.setPending(false);
    }
  }

  async setConfirmUser(code: number) {
    this.setPending(true);

    try {
      const { data } = await axiosInstance.post("/v1/login/confirm", {
        user_id: this.userId,
        confirm_code: code,
      });

      const token = data.access_token;

      setCookie("token", token, 365);

      this.setUser(data.user);

      this.setPending(false);
      this.setLoginModalS(false);
    } catch (error) {
      console.log("error", error?.message);
    } finally {
      this.setPending(false);
    }
  }
}

export default new AuthStore();
