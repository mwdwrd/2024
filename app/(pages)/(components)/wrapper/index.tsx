import cn from "clsx";
import s from "./wrapper.module.scss";
import { Lenis } from "../lenis";
import Navigation from "../navigation";

interface WrapperProps {
  children: React.ReactNode;
  lenis?: boolean;
  lenisOptions?: any;
  className?: string;
}

export function Wrapper({
  children,
  lenis = true,
  lenisOptions = {},
  className,
}: WrapperProps) {
  return (
    <>
      {lenis && <Lenis root options={lenisOptions} />}
      <div className={cn(s.wrapper, className)}>
        <header className={s.header}>
          <Navigation />
        </header>
        <main role="main" className={s.main}>
          {children}
        </main>
      </div>
    </>
  );
}
