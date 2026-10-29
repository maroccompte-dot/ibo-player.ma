import fs from "fs";

const file = `${process.env.TEMP}/gmaps-cid.html`;
const html = fs.readFileSync(file, "utf8");

const keys = [
  "avis",
  "Review",
  "review",
  "étoiles",
  "star",
  "IPTV",
  "11z_thmj8y",
  "rating",
  "Note",
];
for (const k of keys) {
  console.log(k, html.includes(k), html.toLowerCase().includes(k.toLowerCase()));
}

// Save APP_INITIALIZATION_STATE chunk
const m = html.match(/window\.APP_INITIALIZATION_STATE\s*=\s*/);
if (m) {
  const start = m.index + m[0].length;
  const chunk = html.slice(start, start + 50000);
  fs.writeFileSync("scripts/gmaps-app-state.txt", chunk);
  console.log("wrote app state", chunk.length);
}

// Find consent / blocked
console.log("consent", /consent|Before you continue|Avant d.continuer/i.test(html));
console.log("title tag", html.match(/<title>[^<]+<\/title>/i)?.[0]);

// Any 5-star adjacent strings
const five = [...html.matchAll(/.{0,40}5(?:\.0)?(?:\\u2605|★).{0,40}/g)].slice(0, 20);
console.log("five stars", five.map((x) => x[0]));

// Search place name context
const p = html.indexOf("IPTV IBO PLAYER");
console.log("place context:\n", html.slice(p, p + 2000));
