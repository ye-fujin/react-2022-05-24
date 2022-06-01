import Logo from "./img/logo.svg";
import styles from "./styles.module.css";

export const Header = () => (
  <header className={styles.root}>
      <img src={Logo} className={styles.logo} alt="logo" />
  </header>
);