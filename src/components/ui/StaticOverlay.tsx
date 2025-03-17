"use client";

import { useEffect, useRef } from "react";

export function StaticOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Static video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <div className="absolute inset-0 opacity-10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="https://ext.same-assets.com/2218019939/842501609.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
}
