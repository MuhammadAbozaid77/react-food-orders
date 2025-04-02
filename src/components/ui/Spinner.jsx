import style from "./Spinner.module.css";
export default function Spinner({ size  }) {
  if (size === "lg") {
    return (
      <>
        <span className={`${style.loader}`}></span>
      </>
    );
  }
  return (
    <>
      <span className={`${style.smallLoader}`}></span>
    </>
  );
}
