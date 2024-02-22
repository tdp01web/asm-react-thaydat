import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (formData) => {
    try {
      const data = await axios.post(`http://localhost:3000/signin`, formData);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
  return (
    <div>
      <div className=" flex justify-center">
        <div className="w-full flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[40%] justify-center border-solid border-[2px] border-blue-500 mt-[100px] rounded-[10px] "
          >
            <h1 className="mx-auto mt-[10px]">Đăng nhập</h1>
            <div className="w-[90%] mx-auto flex flex-col gap-2">
              <span>Nhập Email</span>
              <input type="text" {...register("email")} placeholder="Email" className="border-solid border-2 border-blue-500 rounded-[5px] h-[30px]"/>
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-2 mt-[10px]">
            <span>Nhập Mật Khẩu</span>
              <input
                type="password"
                {...register("password")}
                placeholder=" Password"
                className="border-solid border-2 border-blue-500 rounded-[5px] h-[30px]"
              />
            </div>
            <div className="w-full flex justify-center my-2">
            <button className="border-solid border-2 border-blue-500 rounded-[5px] w-[100px] h-[30px] bg-blue-400 text-white">Đăng nhập</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
