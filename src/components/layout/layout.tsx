import {PropsWithChildren} from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
export function Layout(): JSX.Element {
    return (
        <>
            <header className={styles.header}>header</header>
            <main className={styles.main}><Outlet></Outlet></main>
            <footer className={styles.footer}>footer</footer>
        </>
    );
}
