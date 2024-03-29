import React from "react";
import { useForm } from "react-hook-form";

export const CreateCategory = ({ submit }) => {
  const { handleSubmit, register, reset } = useForm();

  return (
    <div>
      <form
        className="w-[600px] mx-auto  p-5 border border-blue-400 flex flex-col gap-5"
        onSubmit={handleSubmit(submit)}
      >
        <input
          {...register("title", { required: true })}
          className="border outline-blue-400 border-blue-400 px-2 py-1"
          type="text"
          placeholder="TITLE"
        />
        <input
          {...register("description", { required: true })}
          className="border outline-blue-400 border-blue-400 px-2 py-1"
          type="text"
          placeholder="IMG"
        />
        <button className="bg-blue-400 px-6 py-2  text-white ">create</button>
      </form>
    </div>
  );
};
