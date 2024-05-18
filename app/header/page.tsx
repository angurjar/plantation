import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css"; // Use lowercase import

const Header = () => {
  return (
    <header className={`bg-gray-800 text-white p-4 ${styles.header}`}>
      <nav className="flex justify-between items-center navbar">
        <div>
          <Link href="/" passHref>
            <Image src="/logo.png" alt="Your Logo" width={120} height={40} />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/plans">Plans</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
