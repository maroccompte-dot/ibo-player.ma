import fs from "fs";

const files = [
  `${process.env.TEMP}/rev-0.html`,
  `${process.env.TEMP}/rev-1.html`,
  `${process.env.TEMP}/gmaps-review.html`,
];

function decode(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, x) =>
      String.fromCharCode(parseInt(x, 16)),
    );
}

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const h = fs.readFileSync(file, "utf8");
  console.log("\n========", file, h.length);

  const idx = h.indexOf("IPTV");
  if (idx >= 0) {
    console.log("IPTV context:\n", h.slice(idx, idx + 1500));
  }

  // Find review-like arrays: often ["Author", ... null, "review text", ..., 5]
  const authorReview = [
    ...h.matchAll(
      /\["([A-Za-zÀ-ÿ0-9 .'-]{2,40})",null,null,\[[^\]]{0,80}\],null,null,null,null,null,null,\[\[null,\d+\]\],null,\[\[null,"((?:\\.|[^"\\]){10,800})"/g,
    ),
  ];
  console.log("authorReview pattern", authorReview.length);

  // Broader: consecutive quoted strings near star ratings 1-5
  const nearStars = [
    ...h.matchAll(/"(?:\\.|[^"\\]){15,600}",(?:null,)*([1-5])(?:,|\])/g),
  ].slice(0, 50);
  console.log(
    "nearStars",
    nearStars.slice(0, 15).map((m) => ({
      star: m[1],
      text: decode(m[0]).slice(0, 120),
    })),
  );

  // Search for French review words in raw
  for (const word of [
    "Excellent",
    "Parfait",
    "Merci",
    "rapide",
    "activation",
    "recommand",
    "Service",
    "abonné",
    "professionnel",
  ]) {
    const p = h.indexOf(word);
    if (p >= 0) console.log("hit", word, "->", decode(h.slice(p - 40, p + 200)).replace(/\s+/g, " "));
  }

  // Dump all JSON-parseable strings containing accents
  const texts = [];
  const re = /"((?:\\.|[^"\\]){20,900})"/g;
  let m;
  while ((m = re.exec(h)) && texts.length < 5000) {
    let t;
    try {
      t = JSON.parse(`"${m[1]}"`);
    } catch {
      t = decode(m[1]);
    }
    t = String(t).replace(/\s+/g, " ").trim();
    if (t.length < 20) continue;
    if (/https?:|www\.|function|window|google|maps\.|AF_|Local Guide|css|px;/i.test(t))
      continue;
    if (
      /[àâäéèêëïîôùûüç]/i.test(t) ||
      /iptv|ibo|service|activation|rapide|merci|super|abon|recommand|parfait|nanterre|pro /i.test(
        t,
      )
    ) {
      texts.push(t);
    }
  }
  const unique = [...new Set(texts)];
  console.log("unique interesting", unique.length);
  unique.slice(0, 40).forEach((t, i) => console.log(`#${i}: ${t.slice(0, 250)}`));
  fs.writeFileSync(
    `scripts/${file.split(/[/\\]/).pop()}.texts.txt`,
    unique.join("\n\n====\n\n"),
  );
}
