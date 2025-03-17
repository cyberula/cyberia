"use client";

import React from "react";

type ServiceItem = {
  title: string;
  items: string[];
};

const services: ServiceItem[] = [
  {
    title: "Desarrollo Web",
    items: [
      "Registro de Dominio, Hosting propio, configuración y mantenimiento",
      "Diseño y desarrollo de Página Web o Tienda Online en pocos días",
      "Soporte y mantenimiento de Web preexistente",
      "Posicionamiento en buscadores con técnicas de SEO programático",
      "Análisis de métricas y analíticas de tus visitantes",
      "Soporte técnico los 365 días del año",
    ],
  },
  {
    title: "Ofimática y Domótica",
    items: [
      "Soporte IT de hardware y software para tu negocio u oficina",
      "Optimización de la comunicación interna y los procesos de trabajo",
      "Manejo y soporte de Bases de Datos",
      "Capacitación del personal en software y mejores prácticas de seguridad",
      "Configuración de Google Workspace e integración full de tu equipo",
      "Sincronización de archivos internos en la nube",
      "Oficina y hogar inteligentes con implementación de Internet of Things",
    ],
  },
  {
    title: "Desarrollo a la carte",
    items: [
      "Chatbot AI en tu Web o plataformas como Instagram, WhatsApp o Facebook",
      "Ticketera online para eventos, con integración NFT",
      "Customer Relations Manager único para tu negocio",
      "Sistemas para restaurantes y gastronomía, carta QR, mesas, apps de delivery",
      "Gestión de stock, inventario, logística, transporte",
      "Calendario, turnera y agenda de pacientes o clientes automática",
      "Integración con sistemas de payroll, ingresos y egresos de dinero",
      "Cualquier sistema necesario para agilizar y optimizar tus procesos",
    ],
  },
  {
    title: "Producción Multimedia",
    items: [
      "Videos HD, producimos, guionamos, filmamos y editamos",
      "Fotografía profesional de moda, producto, bienes raíces, etc.",
      "Diseño gráfico e ilustraciones digitales",
      "Diseño y animación 2D y 3D",
      "Diseño e impresión 3D de merchandising y herramientas especiales para tu industria o necesidades personales",
      "Press Kit, Media Kit, gacetillas de prensa",
      "Copywriting de blog, landing page, redes sociales, e-mail",
      "Whitepapers, manuales internos, guías, e-books en PDF",
      "Producción de podcast o streaming",
    ],
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="w-full py-12 bg-gradient-to-b from-cyberia-black to-black/95" id="servicios">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-neuropol mb-8 text-cyberia-orange text-center">
          Nuestros Servicios
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-6 border-b border-cyberia-orange/20">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 md:px-6 py-2 md:py-3 font-neuropol text-xs md:text-sm transition-colors ${
                activeTab === index
                  ? "text-cyberia-orange border-b-2 border-cyberia-orange"
                  : "text-cyberia-orange/60 hover:text-cyberia-orange/80"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-black/40 p-4 md:p-6 border-l-2 border-cyberia-orange">
          <ul className="space-y-1 font-roboto-mono text-sm">
            {services[activeTab].items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-cyberia-orange mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {activeTab === 3 && (
          <div className="mt-4 text-center">
            <p className="text-cyberia-orange font-neuropol text-sm md:text-base">
              Fotografía y filmación solo en Córdoba
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
