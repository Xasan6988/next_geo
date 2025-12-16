import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello! This is learning NextJS project</h1>
      <h2>You can see list of countries and his cities</h2>

      <Link href='/countries'>Go to countries</Link>
    </div>
  );
}
