import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const vite = resolve(
  process.platform === 'win32'
    ? 'node_modules/.bin/vite.cmd'
    : 'node_modules/.bin/vite'
);

if (!existsSync(vite)) {
  console.error(`cf-build: Vite binary not found at ${vite}`);
  process.exit(1);
}

const result = spawnSync(vite, ['build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: { ...process.env, NITRO_PRESET: 'cloudflare_module' },
});

if (result.error) {
  console.error(`cf-build: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
