export default function FormLayout({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="w-full  border-gray-300 rounded p-5">
      {children}
    </form>
  );
}
