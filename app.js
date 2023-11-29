const express = require('express')
const app = express();
const session = require('express-session')
const bodyParser = require('body-parser');
let port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'studytools',
    resave: false,
    saveUninitialized: false
}))

app.set('view engine', 'ejs');
app.listen(port, '0.0.0.0',()=>{
    console.log("Server is running on port 3000");
})

app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.render('/intro');
})

app.get('/intro',(req,res)=>{
    res.render('/intro')
})