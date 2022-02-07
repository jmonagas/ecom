import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices</title>
          <meta name="description" content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.h1}>
            Welcome to&nbsp;<span className={styles.highlights}>
              Jewelsy&reg;</span>
          </h1>
          <p className={styles.texts}>
            Get started by browsing our exclusive collections
          </p>
          <div className={styles.grid}>
            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Bracelets</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Cufflinks</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Diamonds</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Earrings</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Necklaces</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Pearls</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Pendants</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Rings</h2>
              <p>See Details and Features</p>
            </a>

            <a
              href="https://web-development-jmonagas.ml/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit | Web Development By J. Monagas | Website"
              className={styles.card}
            >
              <h2 className={styles.h2}>Watches</h2>
              <p>See Details and Features</p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
