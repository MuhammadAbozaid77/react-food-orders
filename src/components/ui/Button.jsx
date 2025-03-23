export default function Button({ children, disabled, onClick, style }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={` border px-3 py-2 rounded-[10px] border-transparent bg-red-600  text-white font-bold cursor-pointer ${style}`}
    >
      {children}
    </button>
  );
}
