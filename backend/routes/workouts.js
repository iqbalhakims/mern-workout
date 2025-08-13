const express = require('express')

const router = express.Router()


//GET a single workout 
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET single workout' })
} )

//POST new workout 
router.post('/' ,async(req, res) => {
    const { title,reps , load } = req.body

    try{
        const workout = await Workout.create({title , load , reps})
        res.status(200).json(workout)

    }catch (error) {
        res.status(400).json({error: error.message})
    }

})

//DELETE new workout 
router.delete('/:id' ,(req, res) => {
    res.json({mssg: ' DELETE new workout'})
})

//UPDATE new workout 
router.patch('/:id' ,(req, res) => {
    res.json({mssg: ' Update a workout'})
})
module.exports = router