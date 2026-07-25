# Asset Provenance

All campaign imagery in `public/images/campaign/` was generated specifically for this project on July 19, 2026. Prompts required original architecture, environments and equipment, and explicitly excluded franchise characters, insignia, logos, trademarks, recognizable vehicle silhouettes, text and watermarks.

| File                                | Purpose                        | Source                              | Optimization                       |
| ----------------------------------- | ------------------------------ | ----------------------------------- | ---------------------------------- |
| `campaign-evolved-manual-hero.webp` | Homepage hero                  | Original AI-generated environment   | WebP, quality 84, max width 1920px |
| `mission-archive-vault.webp`        | Mission editorial section      | Original AI-generated environment   | WebP, quality 84, max width 1600px |
| `field-manual-expedition.webp`      | Field-manual editorial section | Original AI-generated environment   | WebP, quality 84, max width 1600px |
| `campaign-evolved-manual-og.webp`   | Open Graph card                | Crop derived from the original hero | 1200×630 WebP, quality 86          |

The source generations remain in the local Codex generated-images archive and are not committed with the web project.

## YouTube video thumbnails

The files in `public/images/campaign/videos/` are static thumbnail snapshots
downloaded from YouTube on July 25, 2026 for the authorized video directory.
Each file came from the video's public `maxresdefault.jpg` endpoint; the
documented fallback was `hqdefault.jpg`, but all 20 selected videos provided a
valid maximum-resolution image. Copyright and channel attribution remain with
the respective publishers. The local copies prevent 20 third-party image
requests during the initial page render.

| Local file                                   | Video ID      | Publisher       | Source endpoint |
| -------------------------------------------- | ------------- | --------------- | --------------- |
| `01-silent-cartographer-gameplay-demo.jpg`   | `hSjbIM0iegY` | HALO            | YouTube maxres  |
| `02-official-reveal-trailer-ign.jpg`         | `AMGJ7OMqyvI` | IGN             | YouTube maxres  |
| `03-silent-cartographer-ps5-trailer.jpg`     | `175XWulP__Q` | PlayStation     | YouTube maxres  |
| `04-cinematic-story-trailer-halo.jpg`        | `0MxBFXH2a_U` | HALO            | YouTube maxres  |
| `05-assault-control-room-gameplay-demo.jpg`  | `C6JyOj-7tH8` | HALO            | YouTube maxres  |
| `06-legendary-laso-stream-part-1.jpg`        | `Yauh8QU8IHE` | TheBurntPeanut  | YouTube maxres  |
| `07-first-gameplay-demo-enfant-terrible.jpg` | `Nkee7mEZ77Y` | ENFANT TERRIBLE | YouTube maxres  |
| `08-asmongold-reaction.jpg`                  | `uPM_jD4gkWA` | Asmongold TV    | YouTube maxres  |
| `09-operation-meteorite-trailer-halo.jpg`    | `G4sUx2nX5EQ` | HALO            | YouTube maxres  |
| `10-silent-cartographer-trailer-halo.jpg`    | `efThjRym-ks` | HALO            | YouTube maxres  |
| `11-cinematic-story-trailer-playstation.jpg` | `Wn2m4Xhk2UE` | PlayStation     | YouTube maxres  |
| `12-roundtable-reveal-playstation.jpg`       | `T5l3c21WE0o` | PlayStation     | YouTube maxres  |
| `13-legendary-laso-stream-part-2.jpg`        | `lLiHaCK8cyc` | TheBurntPeanut  | YouTube maxres  |
| `14-not-a-remake-act-man.jpg`                | `M60v2JaDDCQ` | The Act Man     | YouTube maxres  |
| `15-cinematic-story-trailer-ign.jpg`         | `JtrC0G1eqfA` | IGN             | YouTube maxres  |
| `16-roundtable-reveal-halo.jpg`              | `e-tXi1NC_aU` | HALO            | YouTube maxres  |
| `17-new-missions-gameplay-trailer-ign.jpg`   | `HhsxGagHirw` | IGN             | YouTube maxres  |
| `18-new-missions-trailer-xbox.jpg`           | `DPrm70EK2f0` | XBOX            | YouTube maxres  |
| `19-before-you-buy-gameranx.jpg`             | `WLeGiRgpFGk` | gameranx        | YouTube maxres  |
| `20-walkthrough-part-1-radbrad.jpg`          | `6pQ0Ir5HmDw` | theRadBrad      | YouTube maxres  |
