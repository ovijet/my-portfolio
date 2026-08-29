"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubContribution = () => {
  return (
    <div className="p-6 w-full bg-[#0d1117] rounded-xl border border-gray-800 text-white max-w-3xl mx-auto my-6">
      <h3 className="text-xl font-semibold mb-4">GitHub Contributions</h3>

      <div className="w-full overflow-x-auto flex justify-center">
        <GitHubCalendar
          username="ovijet"
          colorScheme="dark"
          year={new Date().getFullYear()}
          blockSize={12}
          blockMargin={5}
          fontSize={12}
          showWeekdayLabels={true}
        />
      </div>
      <div id="github-tooltip" className="tooltip" />
    </div>
  );
};

export default GithubContribution;
