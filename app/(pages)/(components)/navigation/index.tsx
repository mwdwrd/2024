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
    <div className={clsx("", { [s.active]: isActive })}>
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
    <div className="flex flex-row w-full justify-between gap-6 font-mono text-xs uppercase">
      <div className="flex flex-1 flex-row">
        <Link href={"/"}>Matty Woodward</Link>
      </div>
      <div className="flex flex-1 w-full justify-between gap-6">
        <nav className="flex gap-6 justify-center">
          {mainNav}
        </nav>
        <div className="flex gap-6 justify-end">
          <span className="cursor-default">
            <Clock />
          </span>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
