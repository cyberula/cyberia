import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-black border-t border-cyberia-orange/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Logo />

          <div className="mt-4 text-center">
            <p className="text-cyberia-orange/70 font-roboto-mono text-sm">
              No nos reservamos <Link href="https://cdn.mises.org/15_2_1.pdf" className="underline hover:text-cyberia-orange">ningún derecho de nada</Link>.
            </p>
          </div>

          <div className="mt-2 text-center">
            <p className="text-cyberia-orange/70 font-roboto-mono text-xs">
              <Link href="https://cyberia.com.ar" className="hover:text-cyberia-orange">Cyberia Digitals</Link> by Mon Mon & Facundo Direkt is marked with <Link href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1" className="hover:text-cyberia-orange">CC0 1.0</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
