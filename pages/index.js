import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices</title>
        <meta name="description" content="Janusz&trade;Jewelsy&reg; | Fine Jewelry at Best Prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to&nbsp;
          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
          >
            Janusz&trade; Jewelsy&reg;
          </a>
        </h1>

        <p className={styles.description}>
          Get started by browsing our exclusive&nbsp;
          <span className={styles.highlight}>collections</span>
        </p>

        <div className={styles.grid}>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Bracelets</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Cufflinks</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Diamonds</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Earrings</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Necklaces</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Pearls</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Pendants</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Rings</h2>
            <p>Details and prices</p>
          </a>

          <a
            href="https://web-development-jmonagas.ml/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit | Web Development By J. Monagas | Website"
            className={styles.card}
          >
            <h2>Watches</h2>
            <p>Details and prices</p>
          </a>

        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://web-development-jmonagas.ml/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit | Web Development By J. Monagas | Website"
        >
          Janusz&trade;
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="Logo" width={25} height={25} />
          </span>
          Jewelsy&reg;
        </a>
      </footer>
    </div>
  );
}
