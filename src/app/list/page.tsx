import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function List() {
  return (
    <main className={styles.main}>
      <div className={styles.linkBox}>
        <a href="https://www.stuur.men" className={styles.stuurmenLink}>
          Stuurmen <br />
          Branding Agency
        </a>
        <Link href="/" className={styles.logoutLink}>
          Log out
        </Link>
      </div>
      <Link href="/dashboard" className={styles.listLink}>
        Go back
      </Link>
      <h1 className={styles.mainHeader}>
        Your list of interesting brand experiences
      </h1>

      <div className={styles.itemsWrapper}>
        <div className={styles.brandExperienceWrapper}>
          <div className="imgBox">
            <Image
              src="/assets/4.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1047} // Specify the width of the image
              height={1052} // Specify the height of the image
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.mainText}>
              Conference stand design for pitching to potential customers.
            </p>
            <div className={styles.deleteBtn}>
              <div className={styles.whiteLine}></div>
            </div>
            <p className={styles.subText}>Environmental design</p>
          </div>
        </div>
        <div className={styles.brandExperienceWrapper}>
          <div className="imgBox">
            <Image
              src="/assets/13.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1047} // Specify the width of the image
              height={1052} // Specify the height of the image
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.mainText}>
              Billboard advertisement brand identity designs.
            </p>
            <div className={styles.deleteBtn}>
              <div className={styles.whiteLine}></div>
            </div>
            <p className={styles.subText}>Corporate identity</p>
          </div>
        </div>
        <div className={styles.brandExperienceWrapper}>
          <div className="imgBox">
            <Image
              src="/assets/2.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1047} // Specify the width of the image
              height={1052} // Specify the height of the image
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.mainText}>
              Board with the company’s logo so visitors can find the entrance to
              the building.
            </p>
            <div className={styles.deleteBtn}>
              <div className={styles.whiteLine}></div>
            </div>
            <p className={styles.subText}>Environmental design</p>
          </div>
        </div>
      </div>
      <div className={styles.grayLine}></div>
      <p className={styles.yourWishes}>Your wishes</p>
      <div className={styles.itemsWrapper}>
        <div className={styles.brandExperienceWrapper}>
          <div className="imgBox">
            <Image
              src="/assets/32.png" // The path should be relative to the `public` directory
              alt="My Image"
              className={styles.brandExperience}
              width={1331} // Specify the width of the image
              height={858} // Specify the height of the image
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.mainText}>
              Phone case with a ring on the back to hold it but in the style of
              the company.
            </p>
            <div className={styles.deleteBtn}>
              <p className={styles.editText}>Edit</p>
            </div>
            <p className={styles.subText}>Environmental design</p>
          </div>
        </div>
      </div>
    </main>
  );
}
