import { forwardRef, useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

// Any Component I am Using Forward Ref ............ Take a full refrence of component in any place
const CustomInput = forwardRef(
  ({ label, name, type, placeholder, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    // Input Type Is Password
    if (type === "password") {
      return (
        <>
          <div className="flex justify-center items-start flex-col mt-[10px]">
            <label
              htmlFor={name}
              className="capitalize mb-1 font-bold text-gray-600"
            >
              {label}
            </label>
            <div className=" p-1 border w-[100%] flex  justify-between items-center rounded-[10px] shadow  border-gray-400 text-[18px]">
              <input
                ref={ref}
                className="w-[100%] p-2  focus:outline-none"
                type={showPassword ? "text" : "password"} // ✅ Toggle between "password" and "text"
                name={name}
                placeholder={placeholder}
                id={name}
                {...rest} // ✅ Ensure all props from `register` are passed
              />
              {showPassword ? (
                <IoMdEyeOff
                  onClick={togglePasswordVisibility}
                  size={25}
                  className="cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={togglePasswordVisibility}
                  size={25}
                  className="cursor-pointer"
                />
              )}
            </div>

            {error && (
              <span className="text-red-500 font-semibold text-[14px]">
                {error}
              </span>
            )}
          </div>
        </>
      );
    }

    // Other Inputs Type

    return (
      <div className="flex justify-center items-start flex-col mt-[10px]">
        <label
          htmlFor={name}
          className="capitalize mb-1 font-bold text-gray-600"
        >
          {label}
        </label>
        <div className=" p-1 border w-[100%] flex  justify-between items-center rounded-[10px] shadow  border-gray-400 text-[18px]">
          <input
            ref={ref}
            className="w-[100%] p-2  focus:outline-none"
            type={type}
            name={name}
            placeholder={placeholder}
            id={name}
            {...rest} // ✅ Ensure all props from `register` are passed
          />
        </div>

        {error && (
          <span className="text-red-500 font-semibold text-[14px]">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default CustomInput;
