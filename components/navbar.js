import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="../" scroll={false}>
        <p className={styles.navLogo}>OUTLINE</p>
      </Link>
      <div className={styles.navMenu}>
        <Link href="../howitworks" scroll={false}>
          <a className={styles.navLink}>How it works</a>
        </Link>
        <Link href="../products" scroll={false}>
          <a className={styles.navLink}>Products</a>
        </Link>
        <Link href="../about" scroll={false}>
          <a className={styles.navLink}>About</a>
        </Link>
      </div>
    </nav>
  );
}
