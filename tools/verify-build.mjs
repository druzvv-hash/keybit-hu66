import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'index.html');
const distPath = path.join(root, 'dist', 'keybit_hu66_local_v0.3.5-alpha.html');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

for (const file of [indexPath, distPath]) {
  if (!fs.existsSync(file)) fail(`missing ${path.relative(root, file)}`);
}

if (process.exitCode) process.exit();

const index = fs.readFileSync(indexPath, 'utf8');
const dist = fs.readFileSync(distPath, 'utf8');

if (index !== dist) fail('index.html and the versioned dist build differ');

const scripts = [...index.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
if (scripts.length < 3) fail(`expected at least 3 inline scripts, found ${scripts.length}`);

scripts.forEach((script, index) => {
  try {
    new vm.Script(script, { filename: `inline-script-${index + 1}.js` });
  } catch (error) {
    fail(`JavaScript syntax error in script ${index + 1}: ${error.message}`);
  }
});

const requiredMarkers = [
  'KeyBitI18n',
  'estimateVerticalRotation',
  'manualCanonicalize',
  'evaluateMacs',
  'macsTransitionAllowed',
  "langUk",
  "langEn",
  'Трафарет HU66',
  'HU66 stencil'
];

for (const marker of requiredMarkers) {
  if (!index.includes(marker)) fail(`missing required marker: ${marker}`);
}

const forbiddenPrivateMarkers = [
  'samples/2505.jpg',
  'samples/2515.jpg',
  'samples/2516.jpg',
  'samples/2574.jpg',
  '34443231',
  '34334421',
  '33231224',
  '11213324'
];

for (const marker of forbiddenPrivateMarkers) {
  if (index.includes(marker)) fail(`private regression marker found: ${marker}`);
}

const externalRuntimeUrls = [...index.matchAll(/https?:\/\/[^\s"'<>]+/g)].map(match => match[0]);
if (externalRuntimeUrls.length) fail(`external runtime URLs found: ${externalRuntimeUrls.join(', ')}`);

if (!index.includes('GPL-3.0-or-later')) fail('SPDX license marker missing');
if (!index.includes('verify every result before cutting')) fail('public alpha safety warning missing');

if (!process.exitCode) {
  console.log(`PASS: ${scripts.length} inline scripts compile`);
  console.log('PASS: bilingual UI, alignment, trajectory, and MACS markers present');
  console.log('PASS: no external runtime URL');
  console.log('PASS: no private regression identifiers');
  console.log('PASS: index and standalone dist build are identical');
}
