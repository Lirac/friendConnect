import React from "react";
import Link from "next/link";
import LoginForm from "@/components/modules/auth/LoginForm";

const LoginPage = (): React.JSX.Element => {
  return (
    <div className="mt-[110px]">
      <div className="max-w-[450px]">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account.
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              {"Don't"} have an account?{" "}
              <Link href="/auth/signup" className="underline underline-offset-4 hover:text-primary">
                Sign up here.
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
