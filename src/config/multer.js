const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        var date = Date.now();
        const fileName = file.key = `${date}-${file.originalname}`;
        
        cb(null, fileName);
      });
    }
  })}

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),

  storage: storageTypes["local"],
  fileFIlter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];
    if (allowedMimes.includes(file.mometype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  }
};
