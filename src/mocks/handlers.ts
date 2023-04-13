import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5000/auth/login", (req, res, context) => {
    return res(context.json({ nickName: "UserNickName" }));
  }),
];
