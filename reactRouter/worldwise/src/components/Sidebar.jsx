import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by WorldWise Inc.{" "}
      </p>
    </div>
  );
}

export default Sidebar;
