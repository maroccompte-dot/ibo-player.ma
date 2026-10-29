import fs from "fs";
import path from "path";

const t = fs.readFileSync("data/apps.ts", "utf8");
const m = t.match(/shortDescription:\s*\n\s*"([^"]+)"/);
console.log("sample:", m && m[1]);
console.log("has accent", /[éèàùê]/.test(t));
console.log("has mojibake", /Ã©|â€/.test(t));
console.log("seo count apps", (t.match(/seo:\s*\{/g) || []).length);

const servers = fs.readFileSync("data/servers.ts", "utf8");
console.log("seo count servers", (servers.match(/seo:\s*\{/g) || []).length);

const apps = t + servers;
const refs = new Set([...apps.matchAll(/\/logos\/([^"]+)/g)].map((x) => x[1]));
console.log("logo refs", refs.size);

const dir = "public/logos";
let removed = 0;
for (const f of fs.readdirSync(dir)) {
  if (refs.has(f)) continue;
  if (
    f.endsWith(".webp") ||
    f.endsWith(".tmp") ||
    f.endsWith(".opt") ||
    f.includes("-opt")
  ) {
    fs.unlinkSync(path.join(dir, f));
    removed++;
    console.log("rm", f);
  }
}
console.log("removed", removed, "left", fs.readdirSync(dir).length);
console.log("golden.svg?", fs.existsSync(path.join(dir, "golden.svg")));
