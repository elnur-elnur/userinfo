import { makeAutoObservable, runInAction } from "mobx";
import { axiosInstance } from "../utils/axios";

class CitiesStore {
  constructor() {
    makeAutoObservable(this);
  }

  // Private
  private _isPending: boolean = false;
  private _cities: any = [];

  // Getter
  get isPending(): boolean {
    return this._isPending;
  }
  get getCities(): any {
    return this._cities;
  }

  // Setter
  setPending(pending: boolean) {
    this._isPending = pending;
  }
  setCities(arr: any) {
    this._cities = arr;
  }

  async citiesAction() {
    this.setPending(true);

    try {
      const { data } = await axiosInstance.get("/v1/city");

      this.setCities(data.data);

      this.setPending(false);
    } catch (error) {
      console.log("error", error?.message);
    } finally {
      this.setPending(false);
    }
  }
}

export default new CitiesStore();
