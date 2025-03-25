import { forwardRef } from "react";

const CustomSelect = forwardRef(
  (
    {
      label,
      name,
      options,
      error,
      type = "single",
      defaultValue = "",
      ...rest
    },
    ref
  ) => {
    return (
      <div className="flex justify-center items-start flex-col mt-[10px]">
        <label
          htmlFor={name}
          className="capitalize mb-1 font-bold text-gray-600"
        >
          {label}
        </label>
        <div className="p-1 border w-[100%] flex justify-between items-center rounded-[10px] shadow border-gray-400 text-[18px]">
          <select
            ref={ref}
            name={name}
            id={name}
            multiple={type === "multi"} // ✅ Enables multi-select if type is "multi"
            defaultValue={type === "multi" ? defaultValue || [] : defaultValue} // ✅ Supports default values for multi-select
            className="w-[100%] p-2 focus:outline-none bg-white"
            {...rest}
          >
            {type === "single" && !defaultValue && (
              <option value="" disabled>
                Select {label}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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

export default CustomSelect;
