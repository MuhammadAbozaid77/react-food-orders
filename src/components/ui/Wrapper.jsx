export default function Wrapper({ children, style }) {
  return (
    <div className={`bg-white mb-3 shadow rounded-2xl ${style}`}>
      {children}
    </div>
  );
}
