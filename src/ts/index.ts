
import { parse } from './parser.js';

import { readFileSync } from 'fs';

const pkg     = JSON.parse( `${ readFileSync('./package.json') }` ),
      version = pkg.version || false;

export { parse, version };
