# NorthPaw landing assets

Drop real files here before launch where noted. `preview-*.png` can be **lifestyle or product imagery** (not necessarily UI screenshots). Keep filenames so `index.html` paths stay valid.

| File | Purpose |
|------|---------|
| `og-northpaw.png` | Open Graph / Twitter preview (**recommended 1200×630**). Replace the generated placeholder with a branded image. |
| `favicon.png`, `favicon-16.png`, `favicon-48.png` | Tab icons; regenerate from `brand/northpaw-mark-transparent.png` (see repo README `sips` note). |
| `apple-touch-icon.png` | iOS home screen / touch icon (180×180). |
| `brand/northpaw-mark-transparent.png` | Primary mark (transparent). Source for favicons and header mark. |
| `brand/northpaw-mark-header.png` | 64×64 header mark (derived from transparent mark). |
| `brand/northpaw-mark.png` | Alternate mark (opaque background); use if you need a non-transparent asset. |
| `preview-ready.png` | Section "Today's read": e.g. trail / conditions mood, ~**4∶3**. |
| `preview-packs.png` | Section "Packs & checklists": e.g. dog + pack / path, ~**4∶3**. |
| `preview-field-guide.png` | Section "Field guide": e.g. map, gear, dog outdoors, ~**4∶3**. |
| `hero-mock.svg` | Optional wireframe; hero also supports a CSS phone frame until you swap in `<img>`. |

## Hero swap-in

In `index.html`, search for `hero-mock` / `REPLACE:` comments. You can replace the inner placeholder with:

```html
<img src="assets/ready-screen.png" alt="NorthPaw app: Ready screen" width="280" height="" />
```
