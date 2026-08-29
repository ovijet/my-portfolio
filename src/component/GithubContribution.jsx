"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaSync } from "react-icons/fa";

const GITHUB_USERNAME = "ovijet";
const POLL_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes auto-refresh
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`;

const darkTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GithubContribution = () => {
  const [colorScheme, setColorScheme] = useState("dark");
  const [calendarData, setCalendarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [fetchCount, setFetchCount] = useState(0);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    count: 0,
    date: "",
  });

  // Dark/Light mode observer
  useEffect(() => {
    const updateScheme = () => {
      setColorScheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };
    updateScheme();
    const observer = new MutationObserver(updateScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Fetch fresh data from GitHub API with cache-busting timestamp
  const fetchData = useCallback(async (showSpinner = false) => {
    if (showSpinner) setIsRefreshing(true);
    try {
      const year = new Date().getFullYear();
      const url = `${API_URL}?y=${year}&_t=${Date.now()}`;
      const res = await fetch(url, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      });
      if (!res.ok) throw new Error("GitHub API error");
      const json = await res.json();

      const contributions = json.contributions.map((d) => ({
        date: d.date,
        count: d.count,
        level:
          d.level !== undefined
            ? d.level
            : d.count === 0
              ? 0
              : d.count <= 3
                ? 1
                : d.count <= 6
                  ? 2
                  : d.count <= 10
                    ? 3
                    : 4,
      }));

      setCalendarData(contributions);
      setLastUpdated(new Date());
      setFetchCount((c) => c + 1);
    } catch (err) {
      console.error("Failed to fetch GitHub contributions:", err);
    } finally {
      setIsLoading(false);
      if (showSpinner) setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Auto-refresh every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => fetchData(), POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchData]);

  const handleRefresh = useCallback(() => {
    if (isRefreshing) return;
    fetchData(true);
  }, [isRefreshing, fetchData]);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      id="github"
      className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white py-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Calendar Card ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-sm rounded-3xl p-8 overflow-hidden"
        >
          {/* Glow background */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#06b6d4] opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#3b82f6] opacity-10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Header (Mac OS window controls + URL bar + buttons) */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-400 dark:text-gray-500 font-mono">
              github.com/{GITHUB_USERNAME}
            </div>

            {/* Refresh button */}
            <motion.button
              onClick={handleRefresh}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Refresh contributions"
              disabled={isRefreshing}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-gray-400 hover:text-[#06b6d4] transition disabled:opacity-50"
            >
              <motion.span
                animate={{ rotate: isRefreshing ? 360 : 0 }}
                transition={
                  isRefreshing
                    ? { duration: 0.7, ease: "linear", repeat: Infinity }
                    : { duration: 0 }
                }
              >
                <FaSync size={11} />
              </motion.span>
            </motion.button>

            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(6,182,212,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#06b6d4] text-white text-xs font-semibold px-4 py-2 rounded-full transition"
            >
              <FaGithub size={14} />
              View Profile
            </motion.a>
          </div>

          {/* Live badge */}
          <div className="flex items-center gap-1.5 mb-6 text-[11px] text-zinc-400 dark:text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
            Live · Updated{" "}
            {lastUpdated.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>

          {/* Calendar Box */}
          <div className="w-full overflow-x-auto flex justify-center pb-2 relative">
            {/* Custom Tooltip */}
            {tooltip.visible && (
              <div
                className="pointer-events-none fixed z-[9999] px-3 py-2 rounded-xl text-xs font-medium shadow-2xl border border-white/10 backdrop-blur-md"
                style={{
                  left: tooltip.x + 14,
                  top: tooltip.y - 52,
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))",
                  backgroundColor:
                    colorScheme === "dark" ? "#0f1923" : "#ffffff",
                  color: colorScheme === "dark" ? "#e2e8f0" : "#1e293b",
                  boxShadow: "0 8px 32px rgba(6,182,212,0.25)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className="w-2 h-2 rounded-sm inline-block flex-shrink-0"
                    style={{
                      backgroundColor:
                        tooltip.count === 0
                          ? colorScheme === "dark"
                            ? "#161b22"
                            : "#ebedf0"
                          : tooltip.count < 3
                            ? "#0e4429"
                            : tooltip.count < 6
                              ? "#006d32"
                              : tooltip.count < 10
                                ? "#26a641"
                                : "#39d353",
                    }}
                  />
                  <span className="font-bold" style={{ color: "#06b6d4" }}>
                    {tooltip.count === 0
                      ? "No contributions"
                      : `${tooltip.count} contribution${tooltip.count !== 1 ? "s" : ""
                      }`}
                  </span>
                </div>
                <div className="opacity-70">{formatDate(tooltip.date)}</div>
              </div>
            )}

            {/* Loading Spinner */}
            {isLoading && (
              <div className="flex items-center gap-2 py-10 text-zinc-400 dark:text-gray-600 text-sm">
                <FaSync className="animate-spin" size={14} />
                Loading contributions...
              </div>
            )}

            {/* Calendar */}
            {!isLoading && calendarData && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={fetchCount}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <ActivityCalendar
                    data={calendarData}
                    colorScheme={colorScheme}
                    blockSize={13}
                    blockMargin={5}
                    fontSize={12}
                    theme={darkTheme}
                    renderBlock={(block, activity) =>
                      React.cloneElement(block, {
                        title: "", // disable default tooltip
                        onMouseEnter: (e) =>
                          setTooltip({
                            visible: true,
                            x: e.clientX,
                            y: e.clientY,
                            count: activity.count,
                            date: activity.date,
                          }),
                        onMouseMove: (e) =>
                          setTooltip((prev) => ({
                            ...prev,
                            x: e.clientX,
                            y: e.clientY,
                          })),
                        onMouseLeave: () =>
                          setTooltip((prev) => ({ ...prev, visible: false })),
                        style: { cursor: "pointer" },
                      })
                    }
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubContribution;
