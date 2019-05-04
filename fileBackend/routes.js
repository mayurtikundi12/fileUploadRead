let router = require("express").Router() ;
let controller = require('./controller') ;

router.route('/upload').post(controller.uploadFile);

module.exports = router ;