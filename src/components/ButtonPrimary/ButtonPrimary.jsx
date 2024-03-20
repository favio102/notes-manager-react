// import s from "./style.module.css";

export function ButtonPrimary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="btn btn-danger rounded-pill fw-bold btn-lg py-2 px-xl-5"
    >
      {children}
    </button>
  );
}
