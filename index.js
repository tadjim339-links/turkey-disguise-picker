"use strict";
const disguises = require("./data.json");

// Return the disguises that fit in `minutes`, using only supplies in `have`
// (a list of lowercase words such as "yellow", "markers"). Quickest first.
function pick({ minutes, have = null } = {}) {
  const hv = have && have.map((h) => h.toLowerCase());
  return disguises
    .filter((d) => d.minutes <= minutes)
    .filter((d) => !hv || d.paper.concat(d.extras).every((s) => hv.some((h) => s.includes(h) || h.includes(s))))
    .sort((a, b) => a.minutes - b.minutes || a.name.localeCompare(b.name));
}

module.exports = { disguises, pick };

if (require.main === module) {
  const minutes = Number(process.argv[2] || 30);
  const have = process.argv.slice(3);
  const res = pick({ minutes, have: have.length ? have : null });
  if (!res.length) console.log("nothing fits - try more time or more supplies");
  res.forEach((d) => console.log(`${d.name} (${d.minutes} min): ${d.paper.concat(d.extras).join(", ")}`));
}
