# Validation protocol

The goal is not only a high average hit rate. The decoder must also recognize when it is unreliable.

## Recommended sample record

For each authorized test key, record privately:

- anonymous sample ID;
- software version;
- phone/camera and browser;
- lighting/background;
- key side;
- automatic or manual alignment;
- verified bitting from an independent authorized method;
- raw KeyBit candidate;
- MACS candidate;
- per-position confidence;
- full-code match and Hamming distance;
- notes about wear, reflections, or unusual geometry.

## Minimum evaluation groups

- new and worn keys;
- both sides where applicable;
- different phones;
- matte and reflective lighting;
- small rotation and perspective errors;
- all four levels represented across positions;
- edge cases near tip and shoulder.

## Metrics

Track at least:

- exact full-code accuracy;
- per-position accuracy;
- wrong-high-confidence rate;
- automatic-alignment success rate;
- manual-frame recovery rate;
- repeatability across multiple photos of the same key;
- MACS correction success and false-correction rate.

## Release gate suggestion

Do not describe the decoder as production-ready until:

- the test set is large and diverse;
- repeat photos are stable;
- high-confidence wrong codes are exceptionally rare and understood;
- manual recovery is predictable;
- all published accuracy claims can be reproduced on an authorized dataset.

## Public data policy

Prefer synthetic or permanently retired demonstration keys. Never publish client key images or matching bitting without explicit authorization. Strip EXIF metadata before any public upload.
