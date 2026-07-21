# Contributing to KeyBit HU66

Thank you for helping improve the project.

## Ground rules

- Work only with keys and vehicles you own or are authorized to service.
- Never post customer key photos, VINs, registration data, addresses, or unredacted EXIF metadata.
- Do not submit proprietary data copied from commercial key-code databases.
- Do not describe an alpha result as safe for direct cutting without independent verification.

## Local setup

No build step is required for normal development.

```bash
git clone <your-fork-url>
cd keybit-hu66
python -m http.server 8000
```

Open `http://localhost:8000`.

Run the public integrity check:

```bash
npm test
```

The test uses only Node.js built-ins and has no package dependencies.

## Code changes

The public alpha currently ships as a readable single-file browser build. Keep changes understandable and avoid introducing remote dependencies, telemetry, or runtime network calls without prior discussion.

A useful pull request should include:

- a concise explanation of the failure mode;
- browser/OS/device details;
- whether automatic or manual alignment was used;
- anonymized measurements or synthetic reproduction data;
- before/after behavior;
- confirmation that `npm test` passes.

## Test images

Public test images must be either:

1. synthetic; or
2. created from a key you own and explicitly released for public use.

Before committing an image:

- strip EXIF metadata;
- remove backgrounds containing paperwork, addresses, registration plates, faces, or workshop customer information;
- do not include the matching real bitting unless disclosure is intentional and authorized;
- prefer a synthetic or permanently retired demonstration key.

## Profile additions

A new profile should not be only a JSON name change. Document:

- stop type;
- working blade dimensions;
- position coordinates;
- discrete level geometry;
- allowed transitions/MACS assumptions;
- independent references or measurement method;
- regression plan.

## Commit style

Use short imperative summaries, for example:

```text
fix Android marker dragging
add HU66 trajectory stability penalty
reject low-confidence shoulder geometry
```
