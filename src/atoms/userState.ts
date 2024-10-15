import { atom } from "recoil"
import { User } from "models/user/user";

const userState = atom<User|null>({
  key: "userState",
  default: null,
});

export default userState;
