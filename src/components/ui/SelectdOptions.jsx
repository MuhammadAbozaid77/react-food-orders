import { forwardRef } from "react";
import Select from "react-select";

const SelectdOptions = forwardRef(
  (
    {
      isMulti,
      isClearable,
      isDisabled,
      isLoading,
      onChange,
      options,
      value,
      error,
      name,
      defaultValue,
    },
    ref
  ) => {
    return (
      <div>
        <Select
          ref={ref}
          name={name || ""}
          options={options}
          isMulti={isMulti}
          value={value}
          isClearable={isClearable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          onChange={onChange}
          defaultValue={defaultValue}
          styles={{
            control: (base) => ({
              ...base,
              border: error ? "1px solid red" : "1px solid #D1D5DB",
              boxShadow: error ? "0 0 3px red" : "0 0 3px #E5E7EB",
              height: "50px",
              outlineColor: "none",
            }),
            // singleValue: (base) => ({
            //   ...base,
            //   color: "blue", // Change selected option text color
            // }),
            // multiValue: (base) => ({
            //   ...base,
            //   backgroundColor: "lightblue", // Change background color for multi-select options
            // }),
            // multiValueLabel: (base) => ({
            //   ...base,
            //   color: "darkblue", // Change text color for multi-selected options
            // }),
            // multiValueRemove: (base) => ({
            //   ...base,
            //   color: "red", // Change remove button color for multi-selected options
            //   ":hover": {
            //     backgroundColor: "pink",
            //   },
            // }),

            option: (base, { isSelected }) => ({
              ...base,
              backgroundColor: isSelected ? "#B91C1C" : base.backgroundColor, // Change selected option background color
              color: isSelected ? "white" : base.color, // Change selected option text color
              ":hover": {
                backgroundColor: "#F3F4F6", // Hover effect for options
                color: "black",
              },
            }),
          }}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

export default SelectdOptions;

// <SelectdOptions
// options={options2}
// {...register("selecteffffffff", {
//   required: {
//     value: true,
//     message: "Required field",
//   },
// })}
// onChange={(selectedOption) => {
//   setValue("selecteffffffff", selectedOption);
//   clearErrors("selecteffffffff"); // <-- Clears error when selecting
// }}
// error={errors?.selecteffffffff?.message}
// />
