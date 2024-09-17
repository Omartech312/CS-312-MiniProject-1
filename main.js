// Imports and initializations
	// imports express.js 
	const express = require('express');
	//imports body-parser for the form data
		//This made it so much easier to work with the different .ejs files
	const bodyParser = require('body-parser');
	//creates the express app
	const app = express();
	//setting the engine to ejs
	app.set('view engine', 'ejs');
	//sets the static dir as public
	app.use(express.static('public'));

// Forming the parse data to allow me to access the form data using req
	//life savior
app.use(bodyParser.urlencoded({ extended: true}));

//imports the routes from this path and saves it as blogRoutes
const wayToKnowledge = require('./routes/index');

//defines teh route to handle the requests
app.use('/', wayToKnowledge);

// Creating the server in the localhost port 8080
	//I added the 0.0.0.0 to allow me to share it on my local network and test
	//the website with my phone which I believe worked
app.listen(8080, '0.0.0.0', () => {
	console.log('Server listening on port 8080');
});
