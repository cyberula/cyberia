import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="w-full py-4 border-b border-cyberia-orange/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <div className="text-center mt-1">
            <p className="text-sm font-roboto-mono text-cyberia-orange/80">
              Servicios Digitales // Productora Multimedia
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
