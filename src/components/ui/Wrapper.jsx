export default function Wrapper({ children, style }) {
  return (
    <div className={` mb-[20px] ${style}`}>{children}</div>
  );
}
