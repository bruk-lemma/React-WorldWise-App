import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWisw Inc.
        </p>
      </footer>
    </div>
  );
}
