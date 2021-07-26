const fs = require("fs");
const zlib = require("zlib"); // this is the module for file compression
const gzip = zlib.createGzip(); // this returns a tranform stream to zip file
const gunzip = zlib.createGunzip(); // this returns a tranform stream to unzip file



/********************************************
    Read and Write streams
**********************************************/
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("./example2.txt");
readStream.pipe(writeStream); // pipe method gives the value of the readStream and take it to destination writeStream




/********************************************
    Read and Write streams and file compression 
    .gz is the extension for the compressed file
**********************************************/
const readStreamCompressed = fs.createReadStream("./example2.txt.gz");
const writeStreamCompressed = fs.createWriteStream("./example2.txt.gz");
const writeStreamUncompressed = fs.createWriteStream("./uncompressed.txt");
readStream.pipe(gzip).pipe(writeStreamCompressed);
readStreamCompressed.pipe(gunzip).pipe(writeStreamUncompressed);

/* this chuck of code read the file in stream and then write to another file */
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });
