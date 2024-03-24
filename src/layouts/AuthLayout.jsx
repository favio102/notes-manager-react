import s from "./styles.module.css";
import { ReactComponent as LogoSVG } from "assets/images/notes.svg";

export function AuthLayout({ children }) {
  const header = (
    <div className={s.header}>
      <LogoSVG className={s.logoTop} />
      <h5 className='pt-1'>NoMatic</h5>
    </div>
  );

  const background = (
    <div>
      <div className="d-flex">
        <LogoSVG className={s.logoTitle} />
        <h1 className={s.backgroundTitle}>NoMatic</h1>
      </div>
      <p className="text-light">One place fot the team notes.</p>
    </div>
  );

  return (
    <div className={s.root}>
      <div className={s.leftSection}>
        {header}
        {children}
      </div>
      <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  );
}
