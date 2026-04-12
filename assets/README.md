# NorthPaw landing assets

Drop real files here before launch where noted. `preview-*.png` can be **lifestyle or product imagery** (not necessarily UI screenshots). Keep filenames so `index.html` paths stay valid.

| File | Purpose |
|------|---------|
| `og-northpaw.png` | Open Graph / Twitter preview (**recommended 1200×630**). Replace the generated placeholder with a branded image. |
| `favicon.ico` | Browser tab icon (placeholder; currently PNG bytes: replace with a real multi-resolution ICO). |
| `favicon.png` | Optional 32×32 PNG; secondary `<link rel="icon">` in `index.html`. |
| `preview-ready.png` | Section "Today's read": e.g. trail / conditions mood, ~**4∶3**. |
| `preview-packs.png` | Section "Packs & checklists": e.g. dog + pack / path, ~**4∶3**. |
| `preview-field-guide.png` | Section "Field guide": e.g. map, gear, dog outdoors, ~**4∶3**. |
| `hero-mock.svg` | Optional wireframe; hero also supports a CSS phone frame until you swap in `<img>`. |

## Hero swap-in

In `index.html`, search for `hero-mock` / `REPLACE:` comments. You can replace the inner placeholder with:

```html
<img src="assets/ready-screen.png" alt="NorthPaw app: Ready screen" width="280" height="" />
```
