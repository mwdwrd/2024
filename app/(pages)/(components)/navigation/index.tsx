import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import navigation from "@/data/navigation.json";
import Clock from "@/components/Clock";
import s from "./navigation.module.scss";

const Navigation = () => {
  const mainNav = navigation.map((link, i) => (
    <>
      <div key={link.href} className={s.navItem}>
        <Link href={link.href}>
          {link.label}
        </Link>
      </div>
      {i < navigation.length - 1 && <div className={s.divider}>/</div>}
    </>
  ));

  return (
    <div className={s.wrapper}>

      <div className={s.left}>
        <h1 className={s.logo}>
          <Link href={"/"}>
            Temporary Studio
          </Link>
        </h1>
      </div>

      <div className={s.right}>
        <div className={s.navMenu}>
          <nav className={s.nav}>
            {mainNav}
          </nav>
          <div className={s.theme}>
            <Clock /> <ThemeSwitcher />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navigation;
