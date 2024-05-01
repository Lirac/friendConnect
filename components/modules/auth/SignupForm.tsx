"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import Icons from "@/components/modules/common/Icons";
import { useRegisterMutation } from "@/redux/apiSlice";
import { useToast } from "@/components/ui/use-toast";

const SignupForm = (): React.JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [register, { isLoading }] = useRegisterMutation();
  const isDisabled = username === "" || email === "" || isLoading;
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    register({ username, email }).then(() => {
      setUsername("");
      setEmail("");
      toast({
        title: "Success",
        description: "Your account has been created",
      });
      router.replace("/");
    });
  };

  return (
    <div className="grid, gap-6">
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
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              username
            </Label>
            <Input
              id="name"
              value={username}
              placeholder="Username"
              type="text"
              name="username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <Button disabled={isDisabled} type={"button"} onClick={handleLogin}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Login with Email
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
