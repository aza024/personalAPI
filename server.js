// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// const db = require('./models');]
const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    name: "Andrea Piazza", // CHANGE ME ;)
    age: 27,
    github: "https://github.com/aza024/",
    linkedin: "https://www.linkedin.com/in/andreampiazza/",
    personalSite:"https://aza024.github.io/",
    currentCity:"San Francisco, CA",
    equineCenter: "The Root Farm",
    equineCenterLocation:"Sauquoit, NY",
    andreasArticle:"http://www.uticaod.com/article/20110816/News/308169912",
    therapyHorses:[
      {
        name:"Stella",
        age: 23,
        isAlive: false, 
        breed: "Norwiegen Fjord",
        color:"beige"
      },
      {
        name:"Nestle",
        age: 10,
        isAlive: true, 
        breed: "American Quarter Horse",
        color:"brown and white"
      },
      {
        name:"Saphera",
        age: 18,
        isAlive: true, 
        breed: "Andalusian",
        color: "grey and white"
      }
    ],
    documentationUrl:
      "https://github.com/aza024/personalAPI/README.md",
    baseUrl:   
      "https://dashboard.heroku.com/apps/shrouded-temple-42222", 
    endpoints: [
      {
        method: "GET", 
        path: "/api", 
        description: "Describes all available endpoints"
      },
      {
        method: "GET", 
        path: "/api/profile", 
        description: "Andréa's Equine Data"
      }, 
      {
        method: "GET", 
        path: "/api/equinecenters", 
        description: "View one equine center located in New York"
      },
        
      //To View - add object
      {
        method:"GET", 
        path: "/api/equinecenters", 
        description:"View Equestrian Therapy Centers located in New York."
      },
      {
        method: "POST", 
        path: "/api/equinecenters", 
        description: "Create a new Equestrian Therapy Center"
      },
      {
        method: "PUT", 
        path: "/api/equinecenters/:id", 
        description: "Edit an existing Equestrian Therapy Centers"
      },
      
      {
        method: "DELETE", 
        path: "/api/equinecenters/:id", 
        description: "Remove an Equestrian Therapy Center"
      }  
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000

app.get('/api/equinecenters', function (req, res) {
  // send all books as JSON response
  db.Center.find(function(err, centers){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json({data: centers});
  });
});

app.post('/api/equinecenters', function (req, res) {
  // send all books as JSON response
  db.Center.find(function(err, centers){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json({data: centers});
  });
});



app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
