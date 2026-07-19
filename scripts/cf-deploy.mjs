import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: process.env,
  });
  if (result.error) {
    console.error(`cf-deploy: ${result.error.message}`);
    process.exit(1);
  }
  if ((result.status ?? 1) !== 0) process.exit(result.status ?? 1);
}

loadEnvFile(resolve('.env.production'));
run(process.execPath, [resolve('scripts/db-setup.mjs')]);

const vite = resolve(
  process.platform === 'win32'
    ? 'node_modules/.bin/vite.cmd'
    : 'node_modules/.bin/vite'
);
const wrangler = resolve(
  process.platform === 'win32'
    ? 'node_modules/.bin/wrangler.cmd'
    : 'node_modules/.bin/wrangler'
);

if (!existsSync(vite) || !existsSync(wrangler)) {
  console.error('cf-deploy: required Vite or Wrangler binary is missing');
  process.exit(1);
}

process.env.NITRO_PRESET = 'cloudflare_module';
run(vite, ['build']);
run(wrangler, ['deploy']);
