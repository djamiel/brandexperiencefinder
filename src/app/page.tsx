"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Navigate to a different page, e.g., dashboard or home
    router.push("/dashboard");
  };

  return (
    <main className={styles.main}>
      <a href="https://www.stuur.men" className={styles.stuurmenLink}>
        Stuurmen <br />
        Branding Agency
      </a>
      <h1 className={styles.mainHeader}>
        Welcome to the Stuurmen brand-experience-finder.
      </h1>
      <p className={styles.subText}>
        This is a tool made by us to make sure the people we work with have a
        good understanding of what the possibility's are. You will find
        previously made brand experiences of many kinds. If you find something
        interesting you can save it so we know what you are looking for.
      </p>
      <p className={styles.comment}>Log in with your email to continue</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className={styles.typeField}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </form>
      <Image
        src="/assets/purple.png" // The path should be relative to the `public` directory
        alt="My Image"
        className={styles.bgImg}
        width={500} // Specify the width of the image
        height={300} // Specify the height of the image
      />
    </main>
  );
}
