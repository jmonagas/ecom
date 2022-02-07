import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://web-development-jmonagas.ml/"
          target="_blank"
          rel="noopener noreferrer"
          title="Created by Web Development By J. Monagas"
        >
          Janusz&trade;
          <span className={styles.logo}>
            <Image
              src="/img/jewelsy_logo.png"
              alt="Jewelsy Logo"
              title="Jewelsy Logo"
              width={30}
              height={30}
            />
          </span>
          Jewelsy&reg;
        </a>
      </footer>
    </>
  );
};

export default Footer;
