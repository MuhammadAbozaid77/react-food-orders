export default function GridFour({ children }) {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
      {children}
    </div>
  );
}
