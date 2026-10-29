import fs from "fs";

const h = fs.readFileSync(`${process.env.TEMP}/gmaps-review.html`, "utf8");
console.log("len", h.length);
console.log("title", h.match(/<title>[^<]+/i)?.[0]);

function decode(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, x) =>
      String.fromCharCode(parseInt(x, 16)),
    );
}

for (const k of [
  "IPTV",
  "avis",
  "Review",
  "étoiles",
  "Nanterre",
  "Maurice",
  "Ci9DQUlR",
  "meta-description",
  "og:description",
  "og:title",
]) {
  console.log(k, h.includes(k));
}

const og = [...h.matchAll(/property="og:([^"]+)" content="([^"]*)"/gi)];
console.log(
  "og tags",
  og.map((m) => `${m[1]}=${decode(m[2]).slice(0, 200)}`),
);

const metas = [...h.matchAll(/name="([^"]+)" content="([^"]*)"/gi)]
  .filter((m) => /desc|title|twitter/i.test(m[1]))
  .map((m) => `${m[1]}=${decode(m[2]).slice(0, 300)}`);
console.log("metas", metas);

// Save APP init state
const m = h.match(/window\.APP_INITIALIZATION_STATE\s*=\s*/);
if (m) {
  const start = m.index + m[0].length;
  fs.writeFileSync("scripts/review-app-state.txt", h.slice(start, start + 200000));
  console.log("wrote app state");
}

// Extract long unicode/quoted french strings from whole file
const texts = [...h.matchAll(/"(?:\\.|[^"\\]){20,1200}"/g)]
  .map((x) => {
    try {
      return JSON.parse(x[0]);
    } catch {
      return decode(x[0].slice(1, -1));
    }
  })
  .map((s) => String(s).replace(/\s+/g, " ").trim())
  .filter(
    (s) =>
      s.length >= 20 &&
      !/https?:|www\.|function|window|google|maps\.|AF_|null,|proto|css|px;|Local Guide/i.test(
        s,
      ),
  );

const interesting = texts.filter(
  (s) =>
    /[àâäéèêëïîôùûüç]/i.test(s) ||
    /iptv|ibo|service|activation|rapide|merci|super|abon|recommand|nanterre|parfait|client|pro/i.test(
      s,
    ),
);

const unique = [...new Set(interesting)];
fs.writeFileSync("scripts/review-texts.txt", unique.join("\n\n====\n\n"));
console.log("interesting", unique.length);
unique.slice(0, 80).forEach((t, i) => console.log(`\n#${i}\n${t.slice(0, 400)}`));
