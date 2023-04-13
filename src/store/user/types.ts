import { REQ_STATUS } from "@/utils/enums";

export interface AccountStateT {
  reqStatus: REQ_STATUS;
  info: {
    nickName: string | null;
  };
}
