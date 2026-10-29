import fs from "fs";
import { execSync } from "child_process";

const token =
  "Ci9DQUlRQUNvZENodHljRjlvT25FNGFrSkxZamxUVG1SNE9USk5aRkp2UWtZelQyYxAB";
const raw = Buffer.from(token, "base64");
console.log("raw bytes", raw.toString("hex"));
console.log("raw utf8", raw.toString("utf8"));

const inner = "CAIQACodChtycF9oOnE4akJLYjlTTmR4OTJNZFJvQkYzT2c";
console.log("inner", Buffer.from(inner, "base64").toString("utf8"));

// Try getentitydetails-like endpoints
const cid = "0x9127ce8810074189";
const fid = "0x47e6658d216e9c87:0x9127ce8810074189";

const urls = [
  `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1s${token}!2m1!1s0x0:${cid}!3m1!1s2@1:${encodeURIComponent("CAIQACodChtycF9oOnE4akJLYjlTTmR4OTJNZFJvQkYzT2c||")}?hl=fr`,
  `https://www.google.com/maps?q=IPTV+IBO+PLAYER&ftid=${fid}&hl=fr`,
];

for (const [i, url] of urls.entries()) {
  const out = `${process.env.TEMP}/rev-${i}.html`;
  execSync(
    `curl.exe -sL -A "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36" -H "Accept-Language: fr-FR" "${url}" -o "${out}"`,
  );
  const h = fs.readFileSync(out, "utf8");
  console.log("\nurl", i, "len", h.length, "IPTV", h.includes("IPTV"));
  // meta description often has review preview on share cards
  const desc = h.match(/content="([^"]{20,500})"[^>]*property="og:description"|property="og:description"[^>]*content="([^"]{20,500})"/i);
  console.log("og:desc", desc?.[1] || desc?.[2]);
  const title = h.match(/property="og:title"[^>]*content="([^"]+)"|content="([^"]+)"[^>]*property="og:title"/i);
  console.log("og:title", title?.[1] || title?.[2]);
}
