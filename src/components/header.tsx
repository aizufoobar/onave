"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles/header.module.scss";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Image src="/icon.svg" alt="Icon" width={40} height={40} />
          <Link href="/" className={"invisible lg:visible"}>
            Onave.
          </Link>
        </div>
      </nav>
    </header>
  );
};
