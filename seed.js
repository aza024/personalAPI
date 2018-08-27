// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');
const db = require('./models')

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}
//arrays should be plural 
const centers = {
    name: "The Root Farm",
    address: "2860 King Road Sauquoit, NY 13456",  
    number: "3155207046",
    email: "info@RootFarm.org",
    website: "www.rootfarm.org",
    disserved: "Autisim, Cerebral Palsy, Developmental Delay, Learning Disablities, Sensory Integration Disorders, TBI, Parkinsons Disease, Downs Syndrome"
}


db.Center.deleteMany({}, (err, removedCenter) =>{
    if(err){
        return console.log('Error')
    }
    return console.log('removed Center')
})
db.Center.create(centers,(err, centers)=>{
    if(err){
        return console.log("Error:", err);
    }
    console.log("Created new Equestrian Therapy Center", centers._id)
    process.exit();
})

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


