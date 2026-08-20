import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Robaプロフィールサイト</h1>
          <p>簡易的な自己紹介文</p>
        </div>
      </main>
    </div>
  );
}
