import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function howitworks() {
  return (
    <div className={styles.landing}>
      <div className={styles.text}>
        <h1 className={styles.title}>How it works</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae
          voluptas optio sed ipsum a dolorem, quaerat sint ad magni quis,
          laudantium minima ea perspiciatis nisi! Quidem maxime voluptatum
          doloremque!
        </p>
      </div>
      <div className={styles.cta}>
        <Link href="#">
          <a className={styles.buttonPrimary}>Order us</a>
        </Link>
        <Link href="#">
          <a className={styles.buttonSecondary}>Get a price</a>
        </Link>
      </div>
      <div className={styles.arrowDown}>
        <Image src="/arrowDown.svg" height={50} width={50} />
      </div>
    </div>
  );
}
