import { SignInButton } from "../SignInButton";
import { AtiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <AtiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </AtiveLink>
          <AtiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </AtiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
