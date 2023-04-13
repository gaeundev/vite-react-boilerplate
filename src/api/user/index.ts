import { HttpRequest } from "@/utils/setupHttpRequest";

import { ReqDataAuthLoginT, ResDataAuthLoginT } from "./type";

const authLogin = async (data: ReqDataAuthLoginT): Promise<ResDataAuthLoginT> => {
  const axios = new HttpRequest<ResDataAuthLoginT, ReqDataAuthLoginT>("/auth/login");

  const response = await axios.post(data);
  return response;
};
export default {
  authLogin: authLogin,
};
