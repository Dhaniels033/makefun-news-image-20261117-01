// main.ts — news-image-20261117 entry.
//
// The scored artifact is entry.png in this repository: a newspaper front
// page I designed for Tuesday 17 November 2026 (masthead with the date,
// lead story on the Kerch Bridge strike, plus Hormuz, Japan, the EU-Rwanda
// return hub, the Pentagon audit, US measles, and an "Also today" strip
// covering the Shenzhen summit, Gaza aid and Sudan). It was rendered from
// frontpage.html (written by hand in this session) with headless Chromium
// at exactly 1024x1024 and checked by eye for legibility.
//
// This program does the simplest legal thing: it copies that image to the
// grader's output directory. Node standard library only, no network, fully
// deterministic — the same bytes go out on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
// An empty MAKEFUN_OUTPUT_DIR counts as unset, like the grader's default.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
