import s from "./layout.module.scss";
import { Lenis } from "./(components)/lenis";
import Navigation from "./(components)/navigation";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Lenis root />
      <div className={s.wrapper}>
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
