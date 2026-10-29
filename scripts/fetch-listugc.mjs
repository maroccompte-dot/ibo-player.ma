import fs from "fs";
import { execSync } from "child_process";

const fid = "0x47e6658d216e9c87:0x9127ce8810074189";
const out = `${process.env.TEMP}/listugc.txt`;
const url =
  "https://www.google.com/maps/rpc/listugcposts?authuser=0&hl=fr&gl=fr&pb=" +
  encodeURIComponent(
    `!1m6!1s${fid}!6m4!4m1!1e1!4m1!1e3!2m2!1i20!2s!5m2!1s!7e81!8m9!2b1!3b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!11m4!1e3!2e1!6m1!1i2!13m1!1e2`,
  );

execSync(
  `curl.exe -sL -A "Mozilla/5.0" -H "Accept-Language: fr-FR" "${url}" -o "${out}"`,
  { stdio: "inherit" },
);

const t = fs.readFileSync(out, "utf8");
fs.writeFileSync("scripts/listugc-raw.txt", t);
console.log("len", t.length);
console.log("head", t.slice(0, 300));

function decode(s) {
  return s
    .replace(/\\n/g, " ")
    .replace(/\\"/g, '"')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) =>
      String.fromCharCode(parseInt(h, 16)),
    );
}

const texts = [...t.matchAll(/"((?:[^"\\]|\\.){20,800})"/g)]
  .map((m) => decode(m[1]).trim())
  .filter(
    (s) =>
      s.length >= 20 &&
      !/https?:|www\.|maps\.|google|null|function|AF_|proto/i.test(s) &&
      (/[àâäéèêëïîôùûüç]/i.test(s) ||
        /service|activation|rapide|merci|super|iptv|abo|client|recommand|nanterre/i.test(
          s,
        )),
  );

const unique = [...new Set(texts)];
console.log("texts", unique.length);
unique.forEach((x, i) => console.log(`\n#${i}\n${x}`));
