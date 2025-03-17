"use client";

import Image from "next/image";

const clientLogos = [
  {
    src: "https://ext.same-assets.com/2093540741/910508150.png",
    alt: "Client logo 1",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/155880210/904288683.png",
    alt: "Client logo 2",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/1641376391/3243768853.png",
    alt: "Client logo 3",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/2259397607/267958844.png",
    alt: "Client logo 4",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/4113686849/3026965062.png",
    alt: "Client logo 5",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/2586210053/856809828.png",
    alt: "Client logo 6",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/3379426622/2168370802.png",
    alt: "Client logo 7",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/1754018526/3754270571.png",
    alt: "Client logo 8",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/3773904168/3981018879.png",
    alt: "Client logo 9",
    width: 100,
    height: 60,
  },
  {
    src: "https://ext.same-assets.com/1341911185/3711881793.png",
    alt: "Client logo 10",
    width: 100,
    height: 60,
  },
];

export function ClientsSection() {
  return (
    <section className="w-full py-8 bg-black overflow-hidden">
      <div className="max-w-full relative">
        <div className="slider-mask">
          <div className="slider-track">
            <div className="slider-content">
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="slider-item"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="slider-content">
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-dup-${index}`}
                  className="slider-item"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-mask {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .slider-track {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .slider-content {
          display: flex;
          align-items: center;
        }

        .slider-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .slider-item:hover {
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
