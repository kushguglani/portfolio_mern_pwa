const express = require('express');
const app = express();
const port = process.env.PORT || 80;


//path is used to go back a directory neatly by __dirname , '../public'
const path = require('path');
const publicPath = path.join(__dirname, './public'); 

//setup the server to serve static files from the public folder
app.use(express.static(publicPath));

app.get('/hikush',(req,res)=>{
    res.send("hello Kush");
})
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.get('/resume_new', function (req, res) {
    res.sendFile('Resume_new.pdf');
});
app.get('/resume_docx', function (req, res) {
    res.sendFile('Resume_new.docx');
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});