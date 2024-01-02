import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

export function Layout(): JSX.Element {
  return (
    <>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}
