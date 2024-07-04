import styles from "./navigation.module.scss";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import navigation from "@/data/navigation.json";

const Navigation = () => {
  const mainNav = navigation.map((link) => (
    <div key={link.href} className={styles.navItem}>
      <Link href={link.href}>
        {link.label}
      </Link>
    </div>
  ));

  return (
    <div className={styles.wrapper}>

      <div className={styles.left}>
        <h1 className={styles.logo}>
          <Link href={"/"}>
            Temporary Studio
          </Link>
        </h1>
      </div>

      <div className={styles.right}>
        <div className={styles.position}>
          Creative Services
        </div>
        <div className={styles.navMenu}>
          <nav className={styles.nav}>
            {mainNav}
          </nav>
          <div className={styles.theme}>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navigation;
