const fs = require("fs");

// Create folder
fs.mkdir("tutorial1", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully created folder");
    // Create file in the folder
    fs.writeFile(
      "./tutorial1/example2.txt",
      "Write this after creating file",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully created file inside folder");
        }
      }
    );
  }
});

// Delete folder
fs.rmdir("tutorial1", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted folder");
  }
});

// Remove multipple files in directory
fs.readdir("tutorial", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    for (let file of files) {
      fs.unlink("./tutorial/" + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully deleted files");
        }
      });
    }
  }
});
