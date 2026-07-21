# Privacy

## What the application processes

KeyBit processes the photo selected by the user, plus local UI settings such as language and alignment controls.

## Where processing happens

Image decoding, alignment, track extraction, and code estimation run in the browser on the user's device.

## What the application does not include

- no analytics;
- no telemetry;
- no advertising SDK;
- no image upload endpoint;
- no remote inference call;
- no user account;
- no manufacturer-code database.

## Local storage

The current language preference may be stored in `localStorage` when the browser origin permits it. Exported debug images and JSON files are saved only after an explicit user action.

## Hosting note

When the static app is hosted by GitHub Pages or another provider, that provider may keep ordinary web access logs. The KeyBit application itself does not send the selected image to the hosting server after the page assets have loaded.

## Public issue safety

Do not upload identifiable key photographs, matching real bitting, VINs, addresses, customer paperwork, or EXIF geolocation to public issues.
