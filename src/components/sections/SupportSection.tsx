import Image from "next/image";

export function SupportSection() {
  return (
    <section className="w-full py-12 bg-cyberia-black">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-neuropol mb-4 text-cyberia-orange">
              Soporte, por cualquier cosa, cualquier día
            </h2>
            <p className="font-roboto-mono text-sm text-cyberia-orange/80 leading-relaxed">
              Olvidate de idas y vueltas con mil e-mails o chatbots AI por cada pequeño bache con cada uno de tus
              servicios digitales y técnicos. A cada uno de nuestros clientes se les asigna un único asesor,
              de carne y hueso, on-call. Molestalo.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full h-[200px] md:h-[280px]">
              <Image
                src="https://ext.same-assets.com/3559553694/4088045676.png"
                alt="Soporte técnico"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
