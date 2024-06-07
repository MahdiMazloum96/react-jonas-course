import styles from "./Button.module.css";
function Button({ children, onCLick, type }) {
  return (
    <div className={`${styles.btn} ${styles[type]}`} onClick={onCLick}>
      {children}
    </div>
  );
}

export default Button;
