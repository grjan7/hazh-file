'use strict';

const { createReadStream } = require('fs');
const { createHash } = require('crypto');

/** 
 * import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHash
} = await import('crypto');

const filename = argv[2];

const hash = createHash('sha256');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});

*/

/**
 * const generateChecksum = async (data, algorithm = 'sha1', encoding = 'hex') => await createHash(algorithm)
  .update(data, 'utf8')
  .digest(encoding);
*/

const getFileHash = async (filePath, algorithm, encoding) => {
  try {
    const reader = createReadStream(filePath);
    const hash = createHash(algorithm || 'sha1');
    reader.on('readable', () => {
      const data = reader.read();
      if (data) {
        hash.update(data, 'utf8')
      } else {
        hash.digest(encoding || 'hex');
      }
    });
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = getFileHash