"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import Modal from "../components/Modal.tsx";

export default function Homescreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <p className={styles.subText}>
        Building brands and honing their brand assets. We've got ample
        experience crafting unique brand expressions tailored to each client's
        needs. Browse through our previous works and add your favorites to a
        personalized list. Doing this will help us find out how to kill off the
        average together!
      </p>

      <div className={styles.catagoryWrapper}>
        <p className={styles.catagoryHeader}>Web design & Development</p>
        <div className={styles.brandExperienceWrapper}>
          <Image
            onClick={openModal}
            src="/assets/31.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1047} // Specify the width of the image
            height={1052} // Specify the height of the image
          />
          <Image
            src="/assets/28.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1737} // Specify the width of the image
            height={1266} // Specify the height of the image
          />
          <video
            autoPlay
            muted
            loop
            src="/assets/11.mp4" // The path should be relative to the `public` directory
            className={styles.brandExperience}
          />
        </div>
        <Link href="/" className={styles.catagoryLink}>
          Check out more of this catagory
        </Link>
      </div>
      <div className={styles.catagoryWrapper}>
        <p className={styles.catagoryHeader}>Print & Packaging</p>
        <div className={styles.brandExperienceWrapper}>
          <Image
            src="/assets/1.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={791} // Specify the width of the image
            height={792} // Specify the height of the image
          />
          <Image
            src="/assets/29.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1057} // Specify the width of the image
            height={1056} // Specify the height of the image
          />
          <Image
            src="/assets/21.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={2050} // Specify the width of the image
            height={1270} // Specify the height of the image
          />
        </div>
        <Link href="/printandpackaging" className={styles.catagoryLink}>
          Check out more of this catagory
        </Link>
      </div>
      <div className={styles.catagoryWrapper}>
        <p className={styles.catagoryHeader}>Corporate Identity</p>
        <div className={styles.brandExperienceWrapper}>
          <Image
            src="/assets/30.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1056} // Specify the width of the image
            height={1052} // Specify the height of the image
          />
          <Image
            src="/assets/25.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1053} // Specify the width of the image
            height={1263} // Specify the height of the image
          />
          <Image
            src="/assets/23.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1267} // Specify the width of the image
            height={1266} // Specify the height of the image
          />
        </div>
        <Link href="/" className={styles.catagoryLink}>
          Check out more of this catagory
        </Link>
      </div>
      <div className={styles.catagoryWrapper}>
        <p className={styles.catagoryHeader}>Environmental Design</p>
        <div className={styles.brandExperienceWrapper}>
          <Image
            src="/assets/2.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1433} // Specify the width of the image
            height={919} // Specify the height of the image
          />
          <Image
            src="/assets/4.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1280} // Specify the width of the image
            height={1067} // Specify the height of the image
          />
          <Image
            src="/assets/6.png" // The path should be relative to the `public` directory
            alt="My Image"
            className={styles.brandExperience}
            width={1342} // Specify the width of the image
            height={943} // Specify the height of the image
          />
        </div>
        <Link href="/" className={styles.catagoryLink}>
          Check out more of this catagory
        </Link>
      </div>
      <div className={styles.catagoryWrapper}>
        <p className={styles.wishlistText}>
          If you don't find what you are looking for have a look at this. You
          can submit what you are looking for to a wishlist. This way we can
          find out our possibilities.
        </p>
        <Link href="/" className={styles.catagoryLink}>
          Add item to wishlist
        </Link>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Image
          src="/assets/31.png" // The path should be relative to the `public` directory
          alt="My Image"
          className={styles.modalImg}
          width={1047} // Specify the width of the image
          height={1052} // Specify the height of the image
        />
        <p className={styles.modalHeader}>
          Webdesign to contact an acquaintance within a company
        </p>
        <p className={styles.modalSubText}>Gnsn</p>
      </Modal>
    </main>
  );
}
