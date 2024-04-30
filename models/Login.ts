import { User } from "@/models/User";

export type statusType = "idle" | "pending" | "success" | "failed";
export type initialStateType = {
  user: User | null;
  status: statusType;
  error: string | undefined;
};
