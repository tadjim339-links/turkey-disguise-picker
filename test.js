const assert = require("assert");
const { pick, disguises } = require("./index");
assert.strictEqual(disguises.length, 7);
assert.deepStrictEqual(pick({ minutes: 15 }).map((d) => d.name), ["Minion"]);
assert.strictEqual(pick({ minutes: 40 }).length, 7);
assert.strictEqual(pick({ minutes: 14 }).length, 0);
// only black paper plus a yellow scrap: Batman
assert.deepStrictEqual(pick({ minutes: 40, have: ["black", "yellow scrap"] }).map((d) => d.name), ["Batman"]);
// sorted quickest first
const t = pick({ minutes: 30 }).map((d) => d.minutes);
assert.deepStrictEqual(t, [...t].sort((a, b) => a - b));
console.log("ok");
