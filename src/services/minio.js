const Minio = require('minio');
const config = require('../config')
const Fs = require('fs');

const minioClient = new Minio.Client({
  endPoint: 'minio.pickeat.fr',
  port: 443,
  useSSL: true,
  accessKey: config.minioAccessKey,
  secretKey: config.minioSecretKey
});


async function minioUpload(file, bucket) {
  const { path, filename, originalname } = file;
  const fileStream = Fs.createReadStream(path);
  return new Promise((resolve, reject) => {
    Fs.stat(path, function (err, stats) {
      if (err) {
        return console.log(err);
      }
      const metadata = {
        'Content-type': 'image',
      };
      minioClient.putObject(bucket, filename + originalname, fileStream, metadata, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(filename + originalname);
        }
      });
    });
  });
}

module.exports = { minioClient, minioUpload };
