import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Banner from "../components/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>
            Jewelsy | Fine Jewelry | Exclusive Collections | Best Prices
          </title>
          <meta
            name="description"
            content="Since 1884, Janusz Jewelsy is a genuine Swiss artisan and master craftsman who designs, creates and sells fine jewelry and exclusive collections at best prices"
            key="description"
          />
          <meta
            name="keywords"
            content="jewelry, bracelets, rings, earrings, pendants, watches, necklaces, pearls, diamonds, cufflinks"
            key="keywords"
          />
        </Head>

        <Banner />

        <main className={styles.main}>
          <h1 className={styles.h1}>
            Welcome to&nbsp;
            <span className={styles.highlights}>Jewelsy&reg;</span>
          </h1>
          <p className={styles.textCentered}>
            Since 1884, Janusz Jewelsy is a genuine Swiss artisan and master
            craftsman who designs, creates and sells fine jewelry
          </p>
          <p className={styles.textCentered}>
            Get started by browsing our <b>exclusive</b> collections
          </p>
          <div className={styles.grid}>
            <Link passHref href={"/"}>
              <a className={styles.card} title="Bracelets Collection">
                <Image
                  className={styles.photos}
                  src={"/img/017-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Bracelets Collection"
                  title="Bracelets Collection"
                />
                <h2 className={styles.h2}>Bracelets</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Cufflinks Collection">
                <Image
                  className={styles.photos}
                  src={"/img/003-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Cufflinks Collection"
                  title="Cufflinks Collection"
                />
                <h2 className={styles.h2}>Cufflinks</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Diamonds Collection">
                <Image
                  className={styles.photos}
                  src={"/img/021-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Diamonds Collection"
                  title="Diamonds Collection"
                />
                <h2 className={styles.h2}>Diamonds</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Earrings Collection">
                <Image
                  className={styles.photos}
                  src={"/img/004-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Earrings Collection"
                  title="Earrings Collection"
                />
                <h2 className={styles.h2}>Earrings</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Necklaces Collection">
                <Image
                  className={styles.photos}
                  src={"/img/020-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Necklaces Collection"
                  title="Necklaces Collection"
                />
                <h2 className={styles.h2}>Necklaces</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Pearls Collection">
                <Image
                  className={styles.photos}
                  src={"/img/024-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Pearls Collection"
                  title="Pearls Collection"
                />
                <h2 className={styles.h2}>Pearls</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Pendants Collection">
                <Image
                  className={styles.photos}
                  src={"/img/012-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Pendants Collection"
                  title="Pendants Collection"
                />
                <h2 className={styles.h2}>Pendants</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Rings Collection">
                <Image
                  className={styles.photos}
                  src={"/img/008-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Rings Collection"
                  title="Rings Collection"
                />
                <h2 className={styles.h2}>Rings</h2>
                <p>See Details and Features</p>
              </a>
            </Link>

            <Link passHref href={"/"}>
              <a className={styles.card} title="Watches Collection">
                <Image
                  className={styles.photos}
                  src={"/img/011-min.jpg"}
                  width={350}
                  height={250}
                  objectFit="cover"
                  alt="Watches Collection"
                  title="Watches Collection"
                />
                <h2 className={styles.h2}>Watches</h2>
                <p>See Details and Features</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
