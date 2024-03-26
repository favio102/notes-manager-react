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

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (password === password2) {
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Successfully Signup, you are now logged in.");
        nagivate("/");
      } catch (error) {
        toast("error", error.message);
      }
    } else {
      toast("error", "Password do not match, try again.");
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signup <br /> to access your team notes.
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type="password"
          onTextChange={setPassword}
        />
        <Input
          placeholder={"Re-enter Password"}
          type="password"
          onTextChange={setPassword2}
        />
        <ButtonPrimary type="submit" className={s.btn}>
          Sign up
        </ButtonPrimary>
        <span>
          Already have an account? <Link to="/signin">Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
