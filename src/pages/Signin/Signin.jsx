import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/auth/auth-slice";
import { AuthAPI } from "api/auth";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthAPI.signin(email, password);
      dispatch(setUser(user));
    } catch (error) {
      console.log("Auth failed");
    }
  };
  
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br /> to access your team notes.
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type="password"
          onTextChange={setPassword}
        />
        <ButtonPrimary type="submit" className={s.btn}>
          Sign in
        </ButtonPrimary>
        <span>
          Don't have an account yet? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
