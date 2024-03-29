import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "./service/useLogin";
import Cookies from "js-cookie";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        Cookies.set("userTocen", res.accessToken, { expires: 2 });
        saveState(res.user);
        navigate("/app", { replace: true });
      },
    });
    reset();
  };
  return (
    <div className="fixed bg-blue-400 inset-0">
      <form
        onSubmit={handleSubmit(submit)}
        className="absolute p-5 rounded-[33px] bg-white shadow-2xl text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-slate-800 w-[400px] flex flex-col gap-2"
      >
        <h1 className="font-semibold text-blue-400">Login</h1>
        <input
          {...register("email", { required: true })}
          defaultValue="sal1movcc@gmail.com"
          className="border outline-blue-400 border-blue-400 px-2 py-1"
          type="email"
        />
        <input
          {...register("password", { required: true })}
          defaultValue="hello"
          className="border outline-blue-400 border-blue-400 px-2 py-1"
          type="password"
        />
        <button className="bg-blue-400 px-6 py-2  text-white ">login</button>
      </form>
    </div>
  );
};
