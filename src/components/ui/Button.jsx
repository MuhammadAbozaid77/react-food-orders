export default function Button({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`border px-3 py-1 rounded border-transparent bg-red-600 text-white font-semibold cursor-pointer hover:bg-red-700 transition-all shadow-md disabled:bg-red-200 disabled:text-red-300 disabled:border-red-200`}
    >
      {children}
    </button>
  );
}
