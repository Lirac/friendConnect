import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";

const SignupForm = (): React.JSX.Element => {
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
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              username
            </Label>
            <Input id="name" placeholder="Username" type="text" name="username" />
          </div>
          <Button>Sign Up with Email</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
