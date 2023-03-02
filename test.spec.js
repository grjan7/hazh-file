'use strict';

const hashVal = require('./index');
const path = require('path');
(async function () {
  console.log(`Case 1: GetHashValue of a file.`)
  try {
    const filePath = path.join(__dirname, '/README.md');
    const checksum = await hashVal(filePath);
    console.log(checksum);
  } catch (e) {
    throw new Error(e);
  }
})();