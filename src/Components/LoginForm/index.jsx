import styles from "./LoginForm.module.scss";
import google from "../../../public/google.svg";
export function LoginForm() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <header className={styles.headerForm}>
          <h2>Bem vindo de volta</h2>
          <h1>Faça login na sua conta</h1>
        </header>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insira a sua senha"
          />
        </label>
        <div className={styles.recoverPassword}>
          <label htmlFor="check">
            Lembre de mim
            <input type="checkbox" name="check" id="checkbox" />
          </label>
          <a href="#"> Esqueceu sua senha?</a>
        </div>

        <div className={styles.formButtons}>
          <button type="submit">Entarr</button>
          <button type="submit">
            <img src={google} alt="" />
            Ou faça login com o google
          </button>
        </div>

        <div className={styles.createAccount}>
          <span>
            Não tem uma conta? <a href="#">Cadastre-se</a>{" "}
          </span>
        </div>
      </form>
    </div>
  );
}
