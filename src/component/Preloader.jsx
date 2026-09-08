"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{ backgroundColor: "#130f40" }}
    >
      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}
        <div
          className="h-16 w-16 animate-spin rounded-full border-4"
          style={{
            borderColor: "rgba(255,255,255,0.25)",
            borderTopColor: "#ffffff",
          }}
        ></div>

        {/* Text */}
        <p className="text-lg font-semibold tracking-wider text-white">
          Loading...
        </p>

      </div>
    </div>
  );
}