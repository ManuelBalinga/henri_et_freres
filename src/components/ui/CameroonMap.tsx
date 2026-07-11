"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { branches } from "@/lib/data";
import { useContent } from "@/lib/content";

const OUTLINE =
  "M255 25 C235 55 240 80 220 110 C205 135 215 160 195 185 C170 215 180 250 150 275 C120 305 150 340 120 380 C95 415 100 450 140 470 C200 495 270 480 330 480 C360 480 355 430 375 400 C410 380 445 370 440 320 C435 280 400 265 410 225 C418 190 390 175 380 140 C368 100 330 90 315 60 C300 38 280 30 255 25 Z";

const VB_W = 500;
const VB_H = 512;

export function CameroonMap({ interactive = true }: { interactive?: boolean }) {
  const c = useContent();
  const [active, setActive] = useState<string | null>("Yaoundé");

  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="map-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#152a58" />
            <stop offset="1" stopColor="#081633" />
          </linearGradient>
          <filter id="map-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={OUTLINE}
          fill="url(#map-fill)"
          stroke="#c9a24b"
          strokeWidth="1.4"
          strokeOpacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* connection lines from HQ */}
        {interactive &&
          branches
            .filter((b) => b.city !== "Yaoundé")
            .map((b) => {
              const hq = branches[0];
              return (
                <motion.line
                  key={`l-${b.city}`}
                  x1={(hq.x / 100) * VB_W}
                  y1={(hq.y / 100) * VB_H}
                  x2={(b.x / 100) * VB_W}
                  y2={(b.y / 100) * VB_H}
                  stroke="#c9a24b"
                  strokeWidth="0.9"
                  strokeDasharray="3 4"
                  strokeOpacity="0.35"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.6 }}
                />
              );
            })}

        {branches.map((b, i) => {
          const cx = (b.x / 100) * VB_W;
          const cy = (b.y / 100) * VB_H;
          const isActive = active === b.city;
          return (
            <g
              key={b.city}
              onMouseEnter={() => interactive && setActive(b.city)}
              className={interactive ? "cursor-pointer" : ""}
            >
              <motion.circle
                cx={cx}
                cy={cy}
                r={b.hub ? 15 : 11}
                fill="#c9a24b"
                opacity={0.18}
                initial={{ scale: 0 }}
                whileInView={{ scale: [1, 1.5, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <motion.circle
                cx={cx}
                cy={cy}
                r={b.hub ? 6 : 4.4}
                fill={isActive ? "#e2c266" : "#c9a24b"}
                stroke="#fff"
                strokeWidth="1.4"
                filter={isActive ? "url(#map-glow)" : undefined}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + i * 0.12, type: "spring", stiffness: 260 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              {(isActive || !interactive) && (
                <text
                  x={cx + (b.x > 55 ? -10 : 12)}
                  y={cy + 3}
                  textAnchor={b.x > 55 ? "end" : "start"}
                  className="fill-white font-sans text-[13px] font-semibold"
                  style={{ paintOrder: "stroke", stroke: "#050d1f", strokeWidth: 3 }}
                >
                  {b.city}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {interactive && (
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
        >
          {branches
            .map((b, idx) => ({ b, idx }))
            .filter(({ b }) => b.city === active)
            .map(({ b, idx }) => (
              <div key={b.city} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl text-white">{b.city}</p>
                  <p className="mt-1 text-sm text-navy-200/80">{c.data.branches[idx].role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-gold-400">{c.data.branches[idx].region}</p>
                  <p className="mt-1 text-sm text-navy-200/80">{c.common.est} {b.established}</p>
                </div>
              </div>
            ))}
        </motion.div>
      )}
    </div>
  );
}
