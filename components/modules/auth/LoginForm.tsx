"use client";

import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import Icons from "../common/Icons";
import { loginUser } from "@/redux/user/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { statusType } from "@/models/Login";

const LoginForm = (): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const loginStatus: statusType = useSelector((state: RootState) => state.user.status);
  const isLoading = loginStatus === "pending";
  const router = useRouter();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    dispatch(loginUser(email));
  };

  if (loginStatus === "success") {
    router.replace("/dashboard");
  }
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              disabled={isLoading}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <Button disabled={loginStatus === "pending"} type={"button"} onClick={handleLogin}>
            {loginStatus === "pending" && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Login with Email
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
