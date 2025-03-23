export default function Button({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={` border px-3 py-2 rounded border-transparent bg-red-600  text-white font-bold cursor-pointer`}
    >
      {children}
    </button>
  );
}
