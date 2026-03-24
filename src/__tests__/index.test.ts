import { expect, test } from 'vitest';

import { quadsystemsFiles } from '../index.ts';

const filename = 'sample3-hmbc-nitrogen.zip';

test('check one name', async () => {
  await expect(
    quadsystemsFiles.getFile(`sample3/${filename}`),
  ).resolves.toMatchObject({
    name: filename,
    relativePath: `sample3/${filename}`,
  });
});

test('check getFile', async () => {
  const file = await quadsystemsFiles.getFile(`sample3/${filename}`);

  expect(file.name).toBe(filename);
});

test('check files', async () => {
  const files = await quadsystemsFiles.files();

  expect(files).toHaveLength(24);
  expect(files.map((f) => f.name)).toContain(filename);
});
