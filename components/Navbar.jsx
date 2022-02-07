import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.brand}>
          <Link passHref href="/"><a title="Back To Homepage">Jewelsy&reg;</a></Link>
        </div>
        <div className={styles.menu}>
          <Link passHref href="/"><a title="Display Menu Bar">
            <Image className={styles.menuIcon} src={"/img/menu_icon.png"} width={30} height={30} alt="Display Menu Bar" title="Display Menu Bar" />
          </a></Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
