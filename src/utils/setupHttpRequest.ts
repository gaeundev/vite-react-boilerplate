import axios, { AxiosRequestConfig, type AxiosInstance } from "axios";

const API_URL = "http://localhost:5000";

const defaultConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const httpInstance = (config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({ ...defaultConfig, ...config });
};

// D : request data
// T : response data
export class HttpRequest<T, D extends object = object> {
  protected url: string;
  private instance: AxiosInstance;

  constructor(url: string, config?: AxiosRequestConfig) {
    this.url = url;
    this.instance = httpInstance(config);
  }

  async get(): Promise<T> {
    const response = await this.instance.get<T>(this.url).then((res) => res.data);

    return response;
  }

  async post(data: D): Promise<T> {
    const response = await this.instance.post<T>(this.url, data).then((res) => res.data);
    return response;
  }
}
