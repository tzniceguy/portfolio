"use client"

import createGlobe from "cobe"
import { AlarmClock, ExternalLink, Globe2, MapPin, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

// Dar es Salaam coordinates
const DAR_LAT = -6.8235
const DAR_LON = 39.2695

const MARKERS = [
	{
		id: "dar",
		location: [DAR_LAT, DAR_LON] as [number, number],
		size: 0.03,
	},
]

function getThemeOptions(isDark: boolean) {
	return {
		dark: isDark ? 1 : 0,
		diffuse: isDark ? 2 : 1.5,
		mapBrightness: isDark ? 2 : 1.5,
		baseColor: isDark
			? ([0.8, 0.8, 0.8] as [number, number, number])
			: ([1, 1, 1] as [number, number, number]),
		markerColor: isDark
			? ([1, 1, 1] as [number, number, number])
			: ([0, 0, 0] as [number, number, number]),
		glowColor: isDark
			? ([0.5, 0.5, 0.5] as [number, number, number])
			: ([0.94, 0.93, 0.91] as [number, number, number]),
	}
}

export default function LocationCard() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
	const [ready, setReady] = useState(false)
	const pointerInteractingRef = useRef<{ x: number; y: number } | null>(null)
	const dragOffsetRef = useRef({ phi: 0 })
	const phiOffsetRef = useRef(0)
	const isPausedRef = useRef(false)
	const [isPaused, setIsPaused] = useState(false)
	const [isDragging, setIsDragging] = useState(false)
	const [showDetails, setShowDetails] = useState(false)
	const [localTime, setLocalTime] = useState("")

	const togglePause = useCallback(() => {
		isPausedRef.current = !isPausedRef.current
		setIsPaused((p) => !p)
	}, [])

	// Live local time updater
	useEffect(() => {
		if (!showDetails) return
		const update = () => {
			setLocalTime(
				new Date().toLocaleTimeString("en-US", {
					timeZone: "Africa/Dar_es_Salaam",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: true,
				}),
			)
		}
		update()
		const timer = setInterval(update, 1000)
		return () => clearInterval(timer)
	}, [showDetails])

	// Close modal on Escape key
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setShowDetails(false)
		}
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [])

	const handlePointerDown = useCallback((e: React.PointerEvent) => {
		pointerInteractingRef.current = { x: e.clientX, y: e.clientY }
		if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
		setIsDragging(false)
	}, [])

	useEffect(() => {
		function handlePointerMove(e: PointerEvent) {
			if (pointerInteractingRef.current !== null) {
				const deltaX = e.clientX - pointerInteractingRef.current.x
				dragOffsetRef.current = { phi: deltaX / 300 }
				setIsDragging(true)
			}
		}

		function handlePointerUp(e: PointerEvent) {
			if (pointerInteractingRef.current !== null) {
				const dx = e.clientX - pointerInteractingRef.current.x
				const dy = e.clientY - pointerInteractingRef.current.y
				const distance = Math.sqrt(dx * dx + dy * dy)
				if (distance < 5) {
					setShowDetails(true)
				}
				phiOffsetRef.current += dragOffsetRef.current.phi
				dragOffsetRef.current = { phi: 0 }
			}
			pointerInteractingRef.current = null
			if (canvasRef.current) canvasRef.current.style.cursor = "grab"
			setIsDragging(false)
		}

		globalThis.addEventListener("pointermove", handlePointerMove, {
			passive: true,
		})
		globalThis.addEventListener("pointerup", handlePointerUp, { passive: true })

		return () => {
			globalThis.removeEventListener("pointermove", handlePointerMove)
			globalThis.removeEventListener("pointerup", handlePointerUp)
		}
	}, [])

	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current

		// Orient globe to Dar es Salaam
		const phi0 = Math.PI / 2 - (DAR_LAT * Math.PI) / 180
		const theta0 = (DAR_LON * Math.PI) / 180
		phiOffsetRef.current = phi0

		const setupSize = () => {
			const parentWidth = canvas.parentElement?.offsetWidth || 400
			const size = Math.min(parentWidth, 400)
			canvas.style.width = `${size}px`
			canvas.style.height = `${size}px`
			return size
		}

		const width = setupSize()
		const dpr = Math.min(
			window.devicePixelRatio || 1,
			window.innerWidth < 640 ? 1.8 : 2,
		)
		const isDark = document.documentElement.classList.contains("dark")

		globeRef.current = createGlobe(canvas, {
			devicePixelRatio: dpr,
			width: width * 2,
			height: width * 2,
			phi: phiOffsetRef.current,
			theta: theta0,
			mapSamples: 16_000,
			markerElevation: 0.02,
			scale: 1.0,
			offset: [0, 0],
			markers: MARKERS,
			...getThemeOptions(isDark),
			markerColor: [1, 0.25, 0.25],
		})

		let animationId = 0

		const resizeObserver = new ResizeObserver((entries) => {
			const entry = entries[0]
			if (!entry) return
			const nextWidth = Math.min(Math.round(entry.contentRect.width), 400)
			canvas.style.width = `${nextWidth}px`
			canvas.style.height = `${nextWidth}px`
			const nextDpr = Math.min(
				window.devicePixelRatio || 1,
				window.innerWidth < 640 ? 1.8 : 2,
			)
			globeRef.current?.update({
				devicePixelRatio: nextDpr,
				width: nextWidth * 2,
				height: nextWidth * 2,
			})
		})

		if (canvas.parentElement) {
			resizeObserver.observe(canvas.parentElement)
		}

		function animate() {
			if (!isPausedRef.current && pointerInteractingRef.current === null) {
				phiOffsetRef.current += 0.003
			}
			globeRef.current?.update({
				phi: phiOffsetRef.current + dragOffsetRef.current.phi,
			})
			animationId = requestAnimationFrame(animate)
		}

		animate()

		const fadeInId = requestAnimationFrame(() => {
			setReady(true)
		})

		return () => {
			cancelAnimationFrame(animationId)
			cancelAnimationFrame(fadeInId)
			resizeObserver.disconnect()
			globeRef.current?.destroy()
			globeRef.current = null
		}
	}, [])

	useEffect(() => {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains("dark")
			globeRef.current?.update(getThemeOptions(isDark))
		})

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${DAR_LAT},${DAR_LON}`

	return (
		<div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 border">
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<MapPin color="#EF4444" size={18} />
					<div>
						<h2 className="text-md font-semibold text-slate-800 dark:text-slate-200">
							Dar es Salaam, Tanzania
						</h2>
						<p className="text-xs text-slate-500 dark:text-slate-400">
							{DAR_LAT.toFixed(4)}°S, {DAR_LON.toFixed(4)}°E
						</p>
					</div>
				</div>

				<div className="flex items-center gap-1">
					{ready && (
						<button
							onClick={() => setShowDetails(true)}
							className="p-1.5 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
							title="Location details"
						>
							<svg
								className="w-4 h-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="10" />
								<path d="M12 16v-4" />
								<path d="M12 8h.01" />
							</svg>
						</button>
					)}
					{ready && (
						<button
							onClick={togglePause}
							className="p-1.5 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
							title={isPaused ? "Resume" : "Pause"}
						>
							{isPaused ? (
								<svg
									className="w-4 h-4"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							) : (
								<svg
									className="w-4 h-4"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
								</svg>
							)}
						</button>
					)}
				</div>
			</div>

			{/* Globe */}
			<div className="flex justify-center relative">
				<div className="relative">
					{!ready && (
						<div className="flex items-center justify-center w-80 h-80 max-w-full">
							<div className="flex flex-col items-center gap-4">
								<div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
								<p className="text-sm text-slate-600 dark:text-slate-400">
									Loading globe...
								</p>
							</div>
						</div>
					)}

					<canvas
						ref={canvasRef}
						onPointerDown={handlePointerDown}
						data-ready={ready}
						className={`rounded-lg transition-all duration-700 select-none ${
							isDragging ? "cursor-grabbing" : "cursor-grab"
						} ${ready ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
						style={{ maxWidth: "100%", touchAction: "none" }}
					/>

					{MARKERS.map((m) => (
						<div
							key={m.id}
							className="pointer-events-none absolute bottom-[anchor(top)] left-[anchor(center)] -translate-x-1/2 -translate-y-2 transition-[opacity,filter]"
							style={{
								positionAnchor: `--cobe-${m.id}`,
								opacity: `var(--cobe-visible-${m.id}, 0)`,
								filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
							}}
						>
							<Badge>Dar es Salaam</Badge>
						</div>
					))}
				</div>
			</div>

			{/* Detail Modal */}
			{showDetails && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
					onClick={(e) => {
						if (e.target === e.currentTarget) setShowDetails(false)
					}}
				>
					<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4 animate-in zoom-in-95 duration-300">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
								Location Details
							</h3>
							<button
								onClick={() => setShowDetails(false)}
								className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
							>
								<X size={18} />
							</button>
						</div>

						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
								<div>
									<p className="font-medium text-slate-800 dark:text-slate-200">
										Dar es Salaam, Tanzania
									</p>
									<p className="text-sm text-slate-500 dark:text-slate-400">
										{DAR_LAT.toFixed(4)}°S, {DAR_LON.toFixed(4)}°E
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<AlarmClock className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
								<div>
									<p className="font-medium text-slate-800 dark:text-slate-200">
										Local Time
									</p>
									<p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
										{localTime || "--:--:--"}
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<Globe2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
								<div>
									<p className="font-medium text-slate-800 dark:text-slate-200">
										Timezone
									</p>
									<p className="text-sm text-slate-500 dark:text-slate-400">
										EAT (UTC+3)
									</p>
								</div>
							</div>

							<a
								href={mapsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 mt-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors text-sm"
							>
								<ExternalLink size={16} />
								Open in Google Maps
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
