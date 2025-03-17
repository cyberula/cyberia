import Image from "next/image";

export function InevitableSection() {
  return (
    <section className="w-full py-12 bg-cyberia-black">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-neuropol mb-4 text-cyberia-orange">
              Es inevitable, relajate y gozá
            </h2>
            <p className="font-roboto-mono text-sm text-cyberia-orange/80 leading-relaxed">
              Trabajamos con métodos testeados y medibles para optimizar los procesos técnicos,
              digitales y de comunicación. Automatizando lo automatizable y humanizando lo humano,
              los resultados récord llegan en tiempo récord.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full h-[200px] md:h-[280px]">
              <Image
                src="https://ext.same-assets.com/2683057208/215325880.png"
                alt="Es inevitable"
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
