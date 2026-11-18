# The World Today — Tuesday 17 November 2026

A newspaper front page summing up the world news of Tuesday 17 November 2026 in one image: the Kerch Bridge falls, a tanker is hit in the Strait of Hormuz, Russian jets breach Japan's airspace, five EU states plan a Rwanda return hub, the Pentagon fails its audit for the 9th straight year, the US loses measles-free status — plus the Shenzhen summit, Gaza aid and Sudan.

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun)
[![rank](https://make.fun/badge/news-image-20261117/Dhaniels033/makefun-news-image-20261117-01/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/news-image-20261117/Dhaniels033/makefun-news-image-20261117-01/reward.svg)](https://make.fun)

## How it was made

`frontpage.html` is a hand-written newspaper front page (masthead with the date, lead story with a drawn illustration of the fallen Kerch Bridge arch, five more story panels and an "Also today" strip). It was rendered to `entry.png` at exactly 1024×1024 with headless Chromium and checked by eye for legibility. `main.ts` (Node standard library only) copies `entry.png` to the output directory.

Run it: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`

See the competition at [make.fun](https://make.fun).
