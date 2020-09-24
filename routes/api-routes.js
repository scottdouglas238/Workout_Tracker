const db = require("../models")

module.exports = function(app){
    app.get("/api/workouts", async function(req, res){
        let findResponse = await findAll()
        function findAll(){
             return db.Workout.find({})
        }
      res.json(findResponse)
    }) 
}

