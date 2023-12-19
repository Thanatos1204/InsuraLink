const fs = require('fs');

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting the file ${filePath}:`, err);
      return;
    }
    console.log(`File ${filePath} deleted successfully`);
  });
}


module.exports = {deleteFile};