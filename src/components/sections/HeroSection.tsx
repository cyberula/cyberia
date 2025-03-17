"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-cyberia-black/70 z-[1]" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="https://ext.same-assets.com/1402548162/1341898313.webm"
            type="video/webm"
          />
          {/* Fallback for browsers that don't support webm */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-neuropol text-cyberia-orange mb-8 leading-tight">
            <span className="block py-2">Un servicio all-inclusive,</span>
            <span className="block py-2">un equipo in-house,</span>
            <span className="block py-2">un asesor on-call</span>
          </h1>

          <p className="text-sm md:text-base font-roboto-mono mb-10 text-cyberia-orange/80 max-w-2xl mx-auto">
            Powerhouse de desarrollo y productora de contenido. Ahorra tiempo, dinero y dolores de cabeza con nuestros devs, diseñadores, redactores y soporte técnico 100% humano para todas las aristas de tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#mas"
              className="bg-cyberia-orange text-black py-2 px-6 font-neuropol transition-colors text-lg border border-transparent hover:bg-black hover:text-cyberia-orange hover:border-cyberia-orange"
            >
              QUIERO SABER MÁS &gt;
            </Link>
            <Link
              href="http://wa.me/5492664323907"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyberia-orange text-black py-2 px-6 font-neuropol transition-colors text-lg border border-transparent hover:bg-black hover:text-cyberia-orange hover:border-cyberia-orange"
            >
              QUIERO HABLAR HOY &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
