const fs = require("fs");

// create file
fs.writeFile("example.txt", "Write this to example.txt file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully created");
  }
});

// read file
fs.readFile("example.txt", "utf8", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});

// Rename file
fs.rename("example2.txt", "example3.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Renamed successfully");
  }
});

// Append data to file
fs.appendFile("example.txt", ", I forgot to write this sentence.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully appended data to file");
  }
});

// Delete File
fs.unlink("example3.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the file");
  }
});
