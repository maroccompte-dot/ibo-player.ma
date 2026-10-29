import fs from "fs";

for (const name of ["gsearch-ibo.html", "gsearch-kg.html"]) {
  const path = `${process.env.TEMP}/${name}`;
  if (!fs.existsSync(path)) {
    console.log("missing", name);
    continue;
  }
  const h = fs.readFileSync(path, "utf8");
  console.log("\n===", name, h.length);
  console.log("title", h.match(/<title>[^<]+/i)?.[0]);
  console.log(
    "has",
    Object.fromEntries(
      ["IPTV", "avis", "étoiles", "Nanterre", "Review", "note"].map((k) => [
        k,
        h.includes(k),
      ]),
    ),
  );

  function decode(s) {
    return s
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
      .replace(/&amp;/g, "&")
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, x) =>
        String.fromCharCode(parseInt(x, 16)),
      )
      .replace(/\\"/g, '"')
      .replace(/\\n/g, " ");
  }

  // aria-label stars often
  const aria = [...h.matchAll(/aria-label="([^"]{10,200})"/gi)]
    .map((m) => decode(m[1]))
    .filter((s) => /étoile|star|avis|note/i.test(s));
  console.log("aria", [...new Set(aria)].slice(0, 20));

  const texts = [...h.matchAll(/>([^<]{25,400})</g)]
    .map((m) => decode(m[1]).trim())
    .filter(
      (s) =>
        /[àâäéèêëïîôùûüç]/i.test(s) &&
        /service|activation|rapide|merci|super|iptv|abon|recommand|parfait|pro/i.test(
          s,
        ) &&
        !/Google|cookie|function|politique/i.test(s),
    );
  console.log("texts", [...new Set(texts)].slice(0, 30));

  // Save a searchable dump of visible-ish strings
  fs.writeFileSync(
    `scripts/${name}.snip.txt`,
    [...new Set(texts)].join("\n---\n"),
  );
}
