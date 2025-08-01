import multer from 'multer';

// user!!!!!!!!!!!!!!!!!!!!!!!!
const username = 'cinevaundeva';

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/profiles');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${username}-${uniqueSuffix}.jpg`);
  },
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

// "file" name must be the name from key name in the client request payload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single('file');

export const uploadImage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return next({ status: 500, message: err.message });
    } else if (err) {
      return next({ status: 500, message: err.message });
    }
    res.status(202).json({ message: req.file });
  });
};

export const deleteImage = (req, res, next) => {
  res.status(200).json({ message: 'image deleted successfully' });
  console.log(req.params.id);
};
