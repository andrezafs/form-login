import { LoginForm } from "../Components/LoginForm";
import { SideContent } from "../Components/SideContent";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <>
      <div className={styles.container}>
        <SideContent></SideContent>
        <LoginForm></LoginForm>
      </div>
    </>
  );
}
