import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/signup", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto mt-[100px]  ">
      <div className="flex flex-col items-center w-[30%]  border-solid border-2 border-blue-500 rounded-[10px]">
        <h2 className="mt-[20px] mb-[20px]">Đăng Ký</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="w-[90%] ">
          <div className="flex flex-col gap-2 ">
            <span>Nhập Email:</span>
            <input
              type="email"
              {...register("email")}
              className="border-2 border-solid border-blue-400 rounded-[5px] h-[30px]"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span>Nhập mật khẩu</span>
            <input
              type="password"
              {...register("password")}
              className="border-2 border-solid border-blue-400 rounded-[5px] h-[30px]"
            />
          </div>
          <div className="w-full flex justify-center my-2">
            <button className="border-solid border-2 border-blue-500 rounded-[5px] w-[80px] h-[30px] bg-blue-400 text-white">Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
