# Sim-to-Thor project page

Static page served by GitHub Pages from the `main` branch root: https://lifelongeeek.github.io/sim-to-thor/

## Adding rollout videos

Drop MP4 (H.264) files at these paths and push. Each slot shows a "Video coming soon" placeholder until its file exists.

| Tab | Files |
|---|---|
| LIBERO | `videos/libero/spatial.mp4`, `object.mp4`, `goal.mp4`, `long.mp4` |
| RoboLab | `videos/robolab/simple.mp4`, `moderate.mp4`, `complex.mp4`, `compare.mp4` |
| SO-101 | `videos/so101/bf16.mp4`, `nvfp4.mp4`, `ours.mp4`, `wrist.mp4` |

Keep each clip short (5–15 s, 4:3, under ~10 MB) so the page loads quickly; GitHub rejects files over 100 MB.
To add or rename a slot, edit the `<figure class="vslot">` entries in `index.html`.
