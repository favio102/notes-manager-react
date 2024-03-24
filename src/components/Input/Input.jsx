import s from "./style.module.css";

export function Input({ type, onTextChange, placeholder }) {
  return (
    <input
      type={type || "text"}
      className={s.input}
      placeholder={placeholder}
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
}
