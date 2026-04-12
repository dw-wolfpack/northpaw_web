# NorthPaw landing assets

Drop real files here before launch where noted. `preview-*.png` can be **lifestyle or product imagery** (not necessarily UI screenshots). Keep filenames so `index.html` paths stay valid.

| File | Purpose |
|------|---------|
| `og-northpaw.png` | Open Graph / Twitter share preview (**1200×630**). Built from `brand/northpaw-mark.png` on the site background; regenerate with Pillow (snippet below). Bump `?v=` on `og:image` / `twitter:image` in `index.html` after replacing. |
| `favicon.png`, `favicon-16.png`, `favicon-48.png` | Tab icons; regenerate from `brand/northpaw-mark-transparent.png` (see repo README `sips` note). |
| `apple-touch-icon.png` | iOS home screen / touch icon (180×180). |
| `brand/northpaw-mark-transparent.png` | Primary mark (transparent). Source for favicons and header mark. |
| `brand/northpaw-mark-header.png` | 64×64 header mark (derived from transparent mark). |
| `brand/northpaw-mark.png` | Alternate mark (opaque background); use if you need a non-transparent asset. |
| `preview-ready.png` | Section "Today's read": e.g. trail / conditions mood, ~**4∶3**. |
| `preview-packs.png` | Section "Packs & checklists": e.g. dog + pack / path, ~**4∶3**. |
| `preview-field-guide.png` | Section "Field guide": e.g. map, gear, dog outdoors, ~**4∶3**. |
| `hero-mock.svg` | Optional wireframe; hero also supports a CSS phone frame until you swap in `<img>`. |

## Regenerate `og-northpaw.png` (share preview)

From the repo with Pillow installed (`pip install pillow`), run from `northpaw_subdomain/assets`:

```bash
python3 -c "
from pathlib import Path
from PIL import Image
root = Path('.')
src, out = root / 'brand/northpaw-mark.png', root / 'og-northpaw.png'
W, H, bg = 1200, 630, (13, 31, 23, 255)
logo = Image.open(src).convert('RGBA')
mw, mh = 720, 520
s = min(mw / logo.width, mh / logo.height, 1.0)
nw, nh = max(1, int(logo.width * s)), max(1, int(logo.height * s))
logo = logo.resize((nw, nh), Image.Resampling.LANCZOS)
c = Image.new('RGBA', (W, H), bg)
c.alpha_composite(logo, ((W - nw) // 2, (H - nh) // 2))
c.convert('RGB').save(out, 'PNG', optimize=True)
print('ok', out)
"
```

Swap `brand/northpaw-mark.png` for a new master asset first if you refresh the brand.

## Hero swap-in

In `index.html`, search for `hero-mock` / `REPLACE:` comments. You can replace the inner placeholder with:

```html
<img src="assets/ready-screen.png" alt="NorthPaw app: Ready screen" width="280" height="" />
```
