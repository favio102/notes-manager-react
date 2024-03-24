import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { Input } from "components/Input/Input";

export function Signin(props) {
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br /> to access your team notes.
      </h2>
      <form action="" className={s.formGroup}>
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"} type="password" />
        <ButtonPrimary className={s.btn}>Sign in</ButtonPrimary>
        <span>
          Don't have an account yet? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );

  return <>{form}</>;
}
