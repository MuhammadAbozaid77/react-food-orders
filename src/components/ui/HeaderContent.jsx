export default function HeaderContent({ children, style }) {
  return (
    <h1 className={`text-[25px] text-gray-500 font-bold py-[10px] ${style}`}>
      {children}
    </h1>
  );
}
