# NorthPaw landing assets

Drop real files here before launch where noted.

| File | Purpose |
|------|---------|
| `og-northpaw.png` | Open Graph / Twitter preview (**recommended 1200×630**). Replace the generated placeholder with a branded image. |
| `favicon.ico` | Browser tab icon (placeholder; currently PNG bytes—replace with a real multi-resolution ICO). |
| `favicon.png` | Optional 32×32 PNG; secondary `<link rel="icon">` in `index.html`. |
| `ready-screen.png` | Optional: hero / product preview screenshots. |
| `pack-checklist.png` | Optional: product preview. |
| `field-guide.png` | Optional: product preview. |
| `hero-mock.svg` | Optional wireframe; hero also supports a CSS phone frame until you swap in `<img>`. |

## Hero swap-in

In `index.html`, search for `hero-mock` / `REPLACE:` comments. You can replace the inner placeholder with:

```html
<img src="assets/ready-screen.png" alt="NorthPaw app — Ready screen" width="280" height="" />
```
