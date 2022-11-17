import { LoginForm } from "../Components/LoginForm";
import { SideContent } from "../Components/SideContent";
import styles from "./Home.modules.scss";

export function Home() {
  return (
    <>
      <div className={styles.container}>
        {/* <h1>Home</h1> */}
        <SideContent></SideContent>
        <LoginForm></LoginForm>
      </div>
    </>
  );
}
