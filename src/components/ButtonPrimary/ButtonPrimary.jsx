export function ButtonPrimary({ className, type, children, onClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={`btn btn-danger rounded-pill fw-bold btn-lg py-2 \\px-xl-5\\ ${className}`}
    >
      {children}
    </button>
  );
}
