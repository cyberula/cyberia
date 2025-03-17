import Link from "next/link";

export function PackageSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-black to-cyberia-black" id="mas">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Main Banner for All-Inclusive Pack */}
        <div className="bg-black/50 p-4 sm:p-6 border-l-2 border-r-2 border-cyberia-orange">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-neuropol mb-2 text-cyberia-orange">
              Pack <span className="text-white">cyberia</span>
              <span className="italic ml-2">all-inclusive</span>
            </h2>
            <p className="font-roboto-mono text-sm text-cyberia-orange/80 max-w-3xl mx-auto mb-6">
              Con el alojamiento y desarrollo de tu Web, podés obtener todo lo demás, tratando con una sola persona
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="flex-1 min-w-[280px] max-w-md">
              <ul className="space-y-1 font-roboto-mono text-sm">
                {/* First Column */}
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Hosting, Dominio, Sitio Web</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Tienda Online</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Posicionamiento en Buscadores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Apps Custom y AI para tu negocio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Contenido Web y RRSS</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[280px] max-w-md">
              <ul className="space-y-1 font-roboto-mono text-sm">
                {/* Second Column */}
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Customer Relations Manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Archivos Internos Sincronizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Soporte Técnico on-call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberia-orange mr-2">+</span>
                  <span>Mucho más <Link href="#servicios" className="text-cyberia-orange underline">(Explorar todo)</Link></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="http://wa.me/5492664323907"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyberia-orange text-black py-2 px-8 font-neuropol transition-colors inline-block hover:bg-black hover:text-cyberia-orange border border-transparent hover:border-cyberia-orange"
            >
              ADQUIRILO HOY &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
