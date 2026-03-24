import { join } from 'node:path';

import type { AbsolutePath } from 'data-test-api';
import init from 'data-test-api';

const path = join(import.meta.dirname, '../data') as AbsolutePath;

export const quadsystemsFiles = init(
  path,
  (file) => file.isFile() && !file.name.startsWith('.'),
);
