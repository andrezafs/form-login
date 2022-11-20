import styles from "./LoginForm.module.scss";
import google from "../../../public/google.svg";
export function LoginForm() {
  return (
    <div className={styles.containerForm}>
      <div></div>
      <form action="" className={styles.form}>
        <header className={styles.headerForm}>
          <h2>Bem vindo de volta</h2>
          <h1>Faça login na sua conta</h1>
        </header>
        <label htmlFor="email" className={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu e-mail"
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insira a sua senha"
          />
        </label>
        <div className={styles.recoverPassword}>
          <label htmlFor="checkbox" className={styles.checkbox}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            Lembre de mim
          </label>
          <a href="#"> Esqueceu sua senha?</a>
        </div>

        <div className={styles.formButtons}>
          <button type="submit" className={styles.login}>
            Entrar
          </button>
          <button type="submit" className={styles.google}>
            <img src={google} alt="Logo do google" />
            Ou faça login com o Google
          </button>
        </div>
      </form>

      <footer className={styles.footerForm}>
        <span>
          Não tem uma conta? <a href="#">Cadastre-se</a>{" "}
        </span>
      </footer>
    </div>
  );
}
