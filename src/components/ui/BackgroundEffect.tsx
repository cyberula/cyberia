"use client";

import { useEffect, useState } from "react";

export function BackgroundEffect() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Occasionally hide/show the effect to simulate static
    const interval = setInterval(() => {
      setVisible(prev => !prev);

      // Show it again quickly if it's hidden
      if (visible) {
        setTimeout(() => setVisible(true), 100);
      }
    }, Math.random() * 5000 + 2000); // Random interval between 2-7 seconds

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div
        className={`absolute inset-0 bg-cyberia-black bg-opacity-5 backdrop-filter ${
          visible ? 'opacity-10' : 'opacity-0'
        } transition-opacity duration-100`}
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDIwMHYyMDBIMHoiLz48L3N2Zz4=')`,
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
}
