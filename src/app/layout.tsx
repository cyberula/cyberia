import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import
import Home from

export const metadata: Metadata = {
  title: "Cyberia Digitals – Servicios Digitales y Productora Multimedia",
  description: "Powerhouse de desarrollo y productora de contenido. Ahorra tiempo, dinero y dolores de cabeza con nuestros devs, diseñadores, redactores y soporte técnico 100% humano para todas las aristas de tu proyecto.",
  icons: {
    icon: [
      {
        url: "https://ext.same-assets.com/2644905851/3252361240.png",
        href: "https://ext.same-assets.com/2644905851/3252361240.png",
      },
    ],
  },
  authors: [
    { name: "Cyberia Digitals" }
  ],
  keywords: ["servicios digitales", "desarrollo web", "multimedia", "cyberia"],
  openGraph: {
    title: "Cyberia Digitals – Servicios Digitales y Productora Multimedia",
    description: "Powerhouse de desarrollo y productora de contenido digital.",
    url: "https://cyberia.com.ar",
    siteName: "Cyberia Digitals",
    images: [
      {
        url: "https://ext.same-assets.com/2644905851/3252361240.png",
        width: 800,
        height: 600,
        alt: "Cyberia Digitals Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
