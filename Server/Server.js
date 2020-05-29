//setting up express server 

const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'Public'); //setting the path by using join method
const port = process.env.PORT || 3000; //for heroku port

app.use(express.static(publicPath)); // we saying to serve defined path which is Public folder

//this things solves the problem when we are reloading the page 
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//to setup server by using listen method
app.listen(port, () => {
    console.log('server is Up');
});