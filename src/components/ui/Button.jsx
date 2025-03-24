export default function Button({ children, disabled, onClick, style, type }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={` border px-3 py-2 rounded-[10px] border-transparent bg-red-700 hover:bg-red-600  transition-all duration-300 text-white font-bold cursor-pointer ${style}`}
    >
      {children}
    </button>
  );
}
