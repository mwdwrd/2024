import { Lenis } from "@/lib/lenis";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Lenis root />
      <div className="bg-background text-foreground min-h-screen flex flex-col overflow-hidden">
        <header className="flex flex-col items-start p-6">
          <Navigation />
        </header>
        <main role="main" className="flex-grow relative flex flex-col mb-16">
          {children}
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}
