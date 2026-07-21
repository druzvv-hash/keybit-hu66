# Roadmap

## Current: HU66 public alpha

- [x] Local browser processing
- [x] UA/EN interface
- [x] Auto/manual vertical alignment
- [x] Two-point manual frame
- [x] HU66 stencil
- [x] Trajectory-based decoding
- [x] MACS validation
- [x] Debug/JSON export
- [ ] Larger authorized regression set
- [ ] Formal repeatability metrics
- [ ] Improved photo-quality checks

## Next: stabilize the engine

- blur, highlight, and perspective warnings;
- stronger wrong-high-confidence rejection;
- versioned profile data separated from UI;
- synthetic public regression fixtures;
- reproducible test runner for browser builds.

## Later: mobile packaging

- installable PWA or Android wrapper;
- live camera overlay;
- capture-quality traffic lights;
- local job history with explicit user control;
- no remote photo processing by default.

## Future profiles

New profiles should be grouped by geometry family rather than added as ad-hoc conditionals:

- internal track;
- edge cut;
- double edge;
- dimple.

Each family requires its own detection strategy and validated profile data.
