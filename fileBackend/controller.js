let multer  = require('multer')
var storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
});
let upload = multer({
    storage: storage
}).any();

const fs = require('fs');

module.exports.uploadFile = (req,res)=>{
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end('Error');
        } else {
            console.log(req.body);
            req.files.forEach(function(item) {
                if(item["fieldname"]=="file"){
                    console.log(item);
                    readFile(item['path']);
                }
                // move your file to destination
            });
            res.end('File uploaded');
        }
    });    
}


function readFile(filepath){
   let content =  fs.readFileSync(filepath);
   console.log(content.toString());
}
