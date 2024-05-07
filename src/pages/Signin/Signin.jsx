import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/auth/auth-slice";
import { AuthAPI } from "api/auth";
import { toast } from "utils/sweet-alert";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthAPI.signin(email, password);
      dispatch(setUser(user));
      await toast("success", "Successfully logged");
      nagivate("/");
    } catch (error) {
      console.log("Auth failed");
      toast("error", error.message);
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
        <span className="fw-lighter text-info fs-6 opacity-25">
          Account for testing purpose: <br />
          test1@gmail.com && test1test1
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
