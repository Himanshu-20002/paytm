import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg  bg-blue-600 w-80 text-center p-2 h-max px-4">
          <Heading label={"Signup"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"john"}
            label={"first name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={"doe"}
            label={"last name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={"harkirat@gmail.com"}
            label={"email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"123456"}
            label={"password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const responce = axios.post(
                  "http://localhost:3001/api/v1/user/signup",
                  {
                    username,
                    password,
                    lastName,
                    firstName
                  }
                );
                localStorage.setItem("token", await responce.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
