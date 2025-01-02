"use client"

import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import ThemeSwitcher from "@/components/theme-switcher";
import navigation from "@/data/navigation.json";
import Clock from "@/components/Clock";
import clsx from "clsx";
import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "react-feather";

interface NavigationItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavigationItem = ({ href, label, isActive }: NavigationItemProps) => (
  <React.Fragment>
    <div className={clsx("hover:text-foreground transition-colors", isActive ? "text-foreground" : "text-foreground/40")}>
      <Link href={href}>{label}</Link>
    </div>
  </React.Fragment>
);

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isWorkRoute = pathname.startsWith('/work/');

  const mainNav = useMemo(() => navigation.map((link, i) => (
    <NavigationItem
      key={link.href}
      href={link.href}
      label={link.label}
      isActive={link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)}
    />
  )), [pathname]);

  const handleBack = () => {
    router.push('/work');
  };

  return (
    <div className="flex flex-row w-full justify-between gap-6 font-mono text-xs px-6 uppercase max-w-screen-2xl mx-auto">
      <div className="flex flex-1 flex-row">
        <AnimatePresence mode="wait">
          {isWorkRoute ? (
            <motion.button
              onClick={handleBack}
              className="flex items-center gap-2 hover:text-foreground/70 transition-colors"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1] // Cubic bezier for smooth easing
              }}
            >
              <motion.div
                initial={{ x: 10 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <ArrowLeft size={14} />
              </motion.div>
              <span>Back</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <Link href={"/"}>MJW © 2025</Link>
            </motion.div>
          )}
        </AnimatePresence>
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
