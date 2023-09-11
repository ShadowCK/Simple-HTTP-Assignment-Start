const fs = require('fs'); // pull in the file system module

const spongeGar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongeGar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongeGar);
  response.end();
};

module.exports = {
  getSpongeGar,
};
