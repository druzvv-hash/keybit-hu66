# Publishing this repository

## 1. Review before publishing

- Search the entire repository for client names, VINs, real key photos, bitting pairs, EXIF data, and proprietary database exports.
- Replace the social preview if desired.
- Confirm the chosen license.
- Run `npm test`.

## 2. Create the repository

From this folder:

```bash
git init
git add .
git commit -m "publish KeyBit HU66 v0.3.5-alpha"
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

Alternatively, create an empty public repository in GitHub first, then use the commands GitHub displays.

## 3. Enable GitHub Pages

Configure Pages to deploy from the `main` branch and repository root. The root `index.html` is ready to serve.

## 4. Repository presentation

Suggested repository name:

```text
keybit-hu66
```

Suggested description:

```text
Experimental offline HU66 internal-track decoder for mobile and desktop browsers.
```

Suggested topics:

```text
computer-vision javascript offline-first automotive locksmith-tools image-processing hu66 pwa
```

Upload `docs/assets/social-preview.png` as the repository social preview.

## 5. First release

Suggested tag and title:

```text
v0.3.5-alpha
KeyBit HU66 v0.3.5-alpha — public research preview
```

Attach the versioned file from `dist/` and optionally a ZIP of the repository source.
