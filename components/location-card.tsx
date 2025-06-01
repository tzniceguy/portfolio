"use client";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { SiGooglemaps } from "react-icons/si";

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
  // Define a proper type for the globe instance
  type GlobeInstance = {
    destroy: () => void;
  };
  const globeRef = useRef<GlobeInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dar es Salaam coordinates
    const darEsSalaamLat = -6.8235; // South
    const darEsSalaamLon = 39.2695; // East

    // Convert coordinates for cobe
    const phi0 = Math.PI - (darEsSalaamLat * Math.PI) / 180;
    const theta0 = (darEsSalaamLon * Math.PI) / 180;

    let width = 0;
    let currentPhi = phi0;
    const currentTheta = theta0;

    const onResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const container = canvasRef.current.parentElement;
        width = Math.min(container.offsetWidth, 400);
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${width}px`;
      }
    };

    const debounce = <T extends (...args: unknown[]) => void>(func: T, wait: number) => {
      let timeout: NodeJS.Timeout;
      return function executedFunction(...args: Parameters<T>) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const debouncedResize = debounce(onResize, 250);

    onResize();
    window.addEventListener("resize", debouncedResize);

    if (!canvasRef.current) return;

    // Add loading delay to show spinner
    const timer = setTimeout(() => {
      if (!canvasRef.current) return;

      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: currentPhi,
        theta: currentTheta,
        dark: 1,
        diffuse: 1.8,
        mapSamples: 16000,
        mapBrightness: 2.5,
        baseColor: [0.9, 0.9, 0.9],
        markerColor: [1, 0.2, 0.2],
        glowColor: [0.4, 0.4, 0.6],
        markers: [
          {
            location: [darEsSalaamLat, darEsSalaamLon],
            size: 0.08,
          },
        ],
        scale: 1.0,
        enablePointerInteraction: true,
        onRender: (state) => {
          // Smooth auto-rotation
          state.phi = currentPhi += 0.003;
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      setIsLoaded(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (globeRef.current) {
        globeRef.current.destroy();
      }
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 border">
      <div className="flex items-center gap-3 mb-6">
        <SiGooglemaps color="#4285F4" size={18} />
        <div>
          <h2 className="text-md font-semibold text-slate-800 dark:text-slate-200">
            Dar es Salaam,Tanzania
          </h2>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="relative">
          {!isLoaded && (
            <div className="flex items-center justify-center w-80 h-80 max-w-full">
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Loading globe...
                </p>
              </div>
            </div>
          )}

          <canvas
            ref={canvasRef}
            className={`rounded-lg transition-all duration-800 cursor-grab active:cursor-grabbing ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              maxWidth: "100%",
            }}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-300 shadow-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-medium">Current Location</span>
        </div>
      </div>
    </div>
  );
}
