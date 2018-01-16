const multer = require('multer');

const fileFilter = (request, file, callback) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    callback(null, true); //all good
  } else {
    callback(null, false); // Not good
  }
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public/images');
  },
  filename: function (req, file, cb) {
    const splitedName = file.originalname.split('.');
    cb(null, file.filename + splitedName[splitedName.length-1]);
  }
});



