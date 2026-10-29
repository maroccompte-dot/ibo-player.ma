import fs from "fs";

for (const f of [
  `${process.env.TEMP}/share-google.html`,
  `${process.env.TEMP}/share-google2.html`,
]) {
  const html = fs.readFileSync(f, "utf8");
  console.log("\n===", f, html.length);
  console.log("title", html.match(/<title>[^<]+/i)?.[0]);
  for (const k of [
    "IPTV",
    "avis",
    "review",
    "étoile",
    "maps",
    "Nanterre",
    "Maurice",
    "share",
  ]) {
    console.log(k, html.includes(k));
  }

  function decode(s) {
    return s
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) =>
        String.fromCharCode(parseInt(h, 16)),
      );
  }

  const texts = [...html.matchAll(/"((?:[^"\\]|\\.){15,800})"/g)]
    .map((m) => decode(m[1]).replace(/\s+/g, " ").trim())
    .filter(
      (s) =>
        s.length >= 15 &&
        !/https?:|www\.|function|window|googleusercontent|AF_|null,|cssText|px;/i.test(
          s,
        ),
    );

  const interesting = texts.filter(
    (s) =>
      /[àâäéèêëïîôùûüç]/i.test(s) ||
      /iptv|ibo|service|activation|rapide|merci|super|avis|étoile|nanterre|thorez|recommand/i.test(
        s,
      ),
  );
  console.log("interesting", interesting.length);
  [...new Set(interesting)].slice(0, 60).forEach((t, i) => {
    console.log(`\n#${i}: ${t.slice(0, 300)}`);
  });

  // og / meta
  const metas = [...html.matchAll(/property="og:[^"]+" content="([^"]*)"/gi)];
  console.log("og", metas.map((m) => m[0]).slice(0, 10));
  const desc = html.match(/name="description" content="([^"]*)"/i);
  console.log("desc", desc?.[1]?.slice(0, 400));
}
