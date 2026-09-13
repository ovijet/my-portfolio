"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const steps = [
      { value: 27, delay: 450 },
      { value: 34, delay: 500 },
      { value: 99, delay: 900 },
      { value: 100, delay: 600 },
    ];

    let totalDelay = 0;

    const timers = steps.map((step) => {
      totalDelay += step.delay;

      return setTimeout(() => {
        setProgress(step.value);

        if (step.value === 100) {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      }, totalDelay);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#130f40]">
      
      {/* Background glow */}
      <div className="absolute h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Circular Progress */}
        <div className="relative flex h-32 w-32 items-center justify-center">

          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.08)]" />

          {/* Progress circle */}
          <svg
            className="-rotate-90"
            width="128"
            height="128"
            viewBox="0 0 128 128"
          >
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="54"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="5"
            />

            {/* Progress */}
            <circle
              cx="64"
              cy="64"
              r="54"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 54}
              strokeDashoffset={
                2 * Math.PI * 54 -
                (progress / 100) * (2 * Math.PI * 54)
              }
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Percentage */}
          <div className="absolute flex items-center justify-center">
            <span className="text-3xl font-bold tracking-tight text-white">
              {progress}
            </span>

            <span className="mt-3 text-sm text-white/60">
              %
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold tracking-[0.25em] text-white">
            LOADING
          </h2>

          <p className="mt-2 text-xs tracking-[0.3em] text-white/40">
            PLEASE WAIT
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-7 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>
    </div>
  );
}