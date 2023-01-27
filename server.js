const { request } = require('express')
const express = require('express')
const app = express() //this is so you can just use 'app' instead of 'express'
const PORT = 8000

const rappers = { //this is the object you will be serving in your API
   '21 savage':{ 
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
   },
   'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
   },
   'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
   }
}

app.get('/', (request, response) => { // the back slash is the main route and this app.get is an event listener
    response.sendFile(__dirname + '/index.html') //this will send people the index.html life when they make a request/ __dirname tells the server where to find the /index.html file.
})

app.get('/api/:name', (request, response) => { //this is where people go to access the API:the piece you want. you can call this whatever you want, it just needs to match the params.request below.
    const rapperName = request.params.name.toLowerCase() //this is how you request an object property back
    if(rappers[rapperName]){
        response.json(rappers[rapperName]) //if a request is made to this route, we respond with the object of rappers
    } else {
        response.json(rappers['unknown']) //this is in case the name doesn't exist in the database.
    }   
})

app.listen(PORT, () => { //we declared PORT as a variable above
    console.log(`The server is now running on port ${PORT}.`) //this is how you test your server is running.
})



