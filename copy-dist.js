const fs = require('fs'),
      path = require('path'),
      src = path.resolve(__dirname, './build/vxpay.min.js'),
      dest = path.resolve(__dirname, './docs/vxpay.min.js');

fs.createReadStream(src).pipe(fs.createWriteStream(dest));

console.log('\n> Copied ' + src + ' to ' + dest + '.');
