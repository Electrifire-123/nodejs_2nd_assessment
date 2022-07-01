const exppress = require('express');

// creating app object
const app = exppress();

// difined the port at 4000;
let port = 4000;

// calling the get method on home route
app.get('/',function(req,res){
    res.send('<h1>Express</h1>');
})
// calling the get method on /api/data route
app.get('/api/data',function(req,res){
    res.send("<h1>Express</h1><p>-<b>Express</b> is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage <b>servers</b> and <b>routes</b>.</p><p></p>");
})

// console to know if its working or not;
console.log('Its Working');

// providing a port to the app.listen so we can see it it the browser in realtime
app.listen(port,function(){ return console.log(`Its working on ${port}`)});
