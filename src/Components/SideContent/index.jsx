import styles from "./SideContent.module.scss";
import logo from "../../../public/logo.svg";
export function SideContent() {
  return <div className={styles.container}>{<img src={logo} alt="" />}</div>;
}
