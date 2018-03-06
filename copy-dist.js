const fs = require('fs'),
      path = require('path'),
      src = path.resolve(__dirname, './build/'),
      dest = path.resolve(__dirname, './docs/'),
      files = ['vxpay.min.js', 'vxpay.js'];

files.forEach((file) => {
	const from = path.resolve(src, file),
	      to = path.resolve(dest, file);

	fs.createReadStream(from).pipe(fs.createWriteStream(to));
	console.log('> Copied ' + file + ' from ' + src + ' to ' + dest + '.');
});

console.log('> Done.');

