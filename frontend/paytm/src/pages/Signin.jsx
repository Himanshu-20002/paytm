import React from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <div className="bg-slate-300  flex justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-yellow-300 w-80 text-center p-2 h-max px-4">
          <Heading label={"signin"} />
          <SubHeading label={" login to your account "} />
          <InputBox placeholder={"Enter your email "} label={"Email"} />
          <InputBox placeholder={"Enter your Password"} label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
