"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { SiGooglemaps } from "@icons-pack/react-simple-icons";

// Extend COBEOptions type
declare module "cobe" {
  interface COBEOptions {
    enablePointerInteraction?: boolean;
    rotateSpeed?: number;
    dragInertia?: number;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    interactive?: boolean;
  }
}

export default function LocationCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dar es Salaam coordinates
  const darEsSalaamLat = -6.8235; // South
  const darEsSalaamLon = 39.2695; // East

  // Tentative coordinate conversion for cobe
  const phi0 = Math.PI - (darEsSalaamLat * Math.PI) / 180; // ≈ 3.261 radians (π - lat for southern hemisphere)
  const theta0 = (darEsSalaamLon * Math.PI) / 180; // ≈ 0.686 radians (direct lon)

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        canvasRef.current.style.height = `${width}px`; // Ensure square aspect ratio
      }
    };
    onResize();
    window.addEventListener("resize", onResize);

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: phi0, // Vertical rotation
      theta: theta0, // Horizontal rotation
      dark: 1,
      diffuse: 2,
      mapSamples: 12000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 0, 0], // Red marker for Dar es Salaam
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [darEsSalaamLat, darEsSalaamLon], size: 0.1 }],
      scale: 1.0, // Full globe view
      onRender: (state) => {
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="shadow-feature-card rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2 mb-4">
        <SiGooglemaps color="#4285F4" size={18} />
        <h2 className="text-sm">Dar Es Salaam</h2>
      </div>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          maxWidth: "600px", // Limit size for visibility
          aspectRatio: "1 / 1",
        }}
      />
    </div>
  );
}
