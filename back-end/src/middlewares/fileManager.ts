import multer from "multer";

function fileManager() {
  const storageOptions = multer.diskStorage({
    destination: "./src/uploads/",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storageOptions });
  return upload.single("file");
}

export default fileManager;
