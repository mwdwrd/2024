"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import ThemeSwitcher from "@/components/ThemeSwitcher";
import navigation from "@/data/navigation.json";
import Clock from "@/components/Clock";
import s from "./navigation.module.scss";
import clsx from "clsx";
import React, { useMemo } from "react";

interface NavigationItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavigationItem = ({ href, label, isActive }: NavigationItemProps) => (
  <React.Fragment>
    <div className={clsx(s.navItem, { [s.active]: isActive })}>
      <Link href={href}>{label}</Link>
    </div>
  </React.Fragment>
);

const Navigation = () => {
  const pathname = usePathname();

  const mainNav = useMemo(() => navigation.map((link, i) => (
    <NavigationItem
      key={link.href}
      href={link.href}
      label={link.label}
      isActive={link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)}
    />
  )), [pathname]);

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <h1 className={s.logo}>
          <Link href={"/"}>Temporary</Link>
        </h1>
      </div>
      <div className={s.right}>
        <div className={s.navMenu}>
          <nav className={s.nav}>
            {mainNav}
          </nav>
          <div className={s.theme}>
            <span className={s.clock}>
              <Clock />
            </span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
