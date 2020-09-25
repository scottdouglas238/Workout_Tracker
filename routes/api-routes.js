const { Workout } = require("../models")
const db = require("../models")

module.exports = function(app){
    app.get("/api/workouts", async function(req, res){
      //  console.log(req)
        let findResponse = await findAll()
        function findAll(){
             return db.Workout.find({})
        }
      res.json(findResponse)
    }) 

    app.post("/api/workouts", function(req, res){
       db.Workout.create(req.body)
       .then(({ _id }) => db.Workout.findOneAndUpdate({},{
         $push: {id: }
       }))
       
       
    })

    

}

