let app = require('express')() ; 
let cors = require('cors');
app.use(cors());
let bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let routes = require('./routes');
app.use(routes);

app.listen(3000,(error)=>{
    if (error) {
        console.log("there was some error in starting the server");
    }else{
        console.log("server started on port 3000");
    }
})
