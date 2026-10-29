import fs from "fs";

const h = fs.readFileSync(`${process.env.TEMP}/share-google.html`, "utf8");
const i = h.indexOf("IPTV");
fs.writeFileSync(
  "scripts/share-iptv-snip.txt",
  h.slice(Math.max(0, i - 300), i + 800),
);

const urls = [
  ...h.matchAll(/https?:\\\/\\\/[^"'\\\s]+/g),
].map((m) => m[0].replace(/\\\//g, "/"));
const urls2 = [...h.matchAll(/https?:\/\/[^"'\\\s<>]+/g)].map((m) => m[0]);
fs.writeFileSync(
  "scripts/share-urls.txt",
  [...new Set([...urls, ...urls2])].join("\n"),
);

// Look for q= or maps place
const q = [...h.matchAll(/[?&]q=([^&"']+)/g)].map((m) =>
  decodeURIComponent(m[1]),
);
fs.writeFileSync("scripts/share-q.txt", [...new Set(q)].join("\n"));

console.log("iptv idx", i);
console.log("urls", [...new Set([...urls, ...urls2])].length);
console.log("q", [...new Set(q)].slice(0, 20));
