export default function Input({ label, name, type, placeholder, error }) {
  //   if (type === "file") {
  //     return "";
  //   }
  return (
    <div className="flex justify-center items-start flex-col mt-[10px]">
      <label htmlFor="" className="capitalize mb-1 font-bold text-gray-600">
        {label}
      </label>
      <input
        className=" w-[100%] p-2 rounded-[10px] shadow border border-gray-400 text-[18px]"
        type={type}
        name={name}
        placeholder={placeholder}
        id=""
      />
      <span className="text-red-500 font-semibold text-[14px]">{error}</span>
    </div>
  );
}
