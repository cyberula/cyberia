import Image from "next/image";

export function OneServiceSection() {
  return (
    <section className="w-full py-12 bg-cyberia-black">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full h-[200px] md:h-[280px]">
              <Image
                src="https://ext.same-assets.com/1459634707/2324792894.png"
                alt="Un solo servicio"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-neuropol mb-4 text-cyberia-orange">
              Un solo servicio, una sola solución
            </h2>
            <p className="font-roboto-mono text-sm text-cyberia-orange/80 leading-relaxed">
              Decile basta al teléfono descompuesto entre freelancers, productoras, diseñadores,
              desarrolladores y publicistas. Nuestro equipo colabora en conjunto en todos los aspectos
              de tu proyecto para darle una solución final a la distonía.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
