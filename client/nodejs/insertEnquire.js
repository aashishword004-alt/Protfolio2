let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get((req,res) =>{
 res.json('hello')
});

let port = 5000
app.listen( port,() =>{

    console.log('Server is listing'  + port)

});