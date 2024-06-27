import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Printandpackaging() {
  return (
    <main className={styles.main}>
      <Image
        src="/assets/pink.png" // The path should be relative to the `public` directory
        alt="My Image"
        className={styles.bgImg}
        width={3080} // Specify the width of the image
        height={1098} // Specify the height of the image
      />
      <div className={styles.linkBox}>
        <a href="https://www.stuur.men" className={styles.stuurmenLink}>
          Stuurmen <br />
          Branding Agency
        </a>
        <Link href="/" className={styles.logoutLink}>
          Log out
        </Link>
      </div>
      <Link href="/list" className={styles.listLink}>
        Go to list
      </Link>
      <h1 className={styles.mainHeader}>Discover brand experiences</h1>
      <Link href="/dashboard" className={styles.subText}>
        Go back to the home screen
      </Link>
      <div className={styles.catagoryWrapper}>
        <p className={styles.catagoryHeader}>Print & Packaging</p>
        <div className={styles.brandExperienceWrapper}>
          <div className={styles.row}>
            <Image
              src="/assets/1.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={791} // Specify the width of the image
              height={792} // Specify the height of the image
            />
            <Image
              src="/assets/3.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1545} // Specify the width of the image
              height={937} // Specify the height of the image
            />
          </div>
          <div className={styles.row}>
            <Image
              src="/assets/29.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1057} // Specify the width of the image
              height={1056} // Specify the height of the image
            />
            <Image
              src="/assets/11.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={943} // Specify the width of the image
              height={940} // Specify the height of the image
            />
          </div>
          <div className={styles.row}>
            <Image
              src="/assets/21.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={2050} // Specify the width of the image
              height={1270} // Specify the height of the image
            />
            <Image
              src="/assets/14.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1378} // Specify the width of the image
              height={939} // Specify the height of the image
            />
          </div>
        </div>
      </div>
      <div className={styles.catagoryWrapper}>
        <p className={styles.wishlistText}>
          If you don't find what you are looking for have a look at this. You
          can submit what you are looking for to a wishlist. This way we can
          find out our possibilities.
        </p>
        <Link href="/webdesignanddevelopment" className={styles.catagoryLink}>
          Add item to wishlist
        </Link>
      </div>
    </main>
  );
}
