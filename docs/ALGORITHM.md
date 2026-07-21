# Algorithm overview

KeyBit HU66 is a classical computer-vision pipeline implemented in local browser JavaScript. It does not use a remote model or neural-network service.

## Processing stages

1. **Image acquisition**
   - User selects or captures a photo.
   - The image is decoded locally into a canvas.

2. **Vertical alignment**
   - Candidate blade regions are evaluated.
   - The long axis is estimated.
   - The user can fine-adjust rotation or flip the image by 180°.

3. **Geometry selection**
   - Automatic mode estimates the working blade.
   - Manual mode uses two points: tip and shoulder.
   - The selected region is normalized to the current HU66 working geometry.

4. **Track segmentation**
   - Multiple local color/intensity hypotheses are evaluated.
   - Candidate track runs are extracted across the normalized blade.

5. **Trajectory reconstruction**
   - The decoder follows a continuous track boundary rather than relying on one isolated pixel per position.
   - Local stability, slope, mask support, and segmentation agreement contribute to confidence.

6. **Position measurement**
   - Eight position windows are sampled along the working length.
   - Each measurement is compared with the configured four-level HU66 model.

7. **MACS validation**
   - The raw candidate is checked for excessive adjacent-level transitions.
   - A globally valid alternative may be proposed.
   - The raw and corrected candidates remain visible; MACS never proves correctness.

8. **Result presentation**
   - Code candidate, confidence, errors, stability, alternatives, debug image, and JSON are shown/exported.

## Design principles

- Prefer rejecting unreliable geometry over returning a convincing wrong code.
- Keep automatic decisions visible in debug output.
- Keep raw measurements separate from rule-based correction.
- Preserve a manual recovery path.
- Avoid network dependencies and hidden server processing.

## Current architecture

The alpha intentionally remains a single readable HTML file to keep experimentation and rollback simple. A future stable release may split the code into modules:

```text
alignment
geometry/profile data
track segmentation
trajectory decoder
MACS/rules
UI/i18n
export/history
```
