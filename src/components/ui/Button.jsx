export default function Button({ children, disabled, color, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`border px-3 py-1 rounded border-transparent bg-${color}-800 text-${color}-100 cursor-pointer hover:bg-${color}-700 transition-all shadow-md disabled:bg-${color}-200 disabled:text-${color}-300 disabled:border-${color}-200`}
    >
      {children}
    </button>
  );
}
