import styles from "../styles/productGrid.module.css";
import Link from 'next/link'
import Image from 'next/image'

export default function Bracelets({ bracelet }) {
  return (
    <>
      <div className={styles.mainGrid}>
        <Link passHref href="/bracelets/[id]" as={`/bracelets/${bracelet.id}`}>
          <a className={styles.flexGrid}>
            <Image src={`${bracelet.photo}`}
              width="350px" height="225px" alt="Janusz Jewelsy Collections" title="Janusz Jewelsy Collections" />
            &nbsp;&nbsp;{bracelet.name}&nbsp;{bracelet.id}
          </a>
        </Link>
      </div>
    </>
  )
}
