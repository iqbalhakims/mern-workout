const express = require('express')

const router = express.Router()


//GET a single workout 
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET single workout' })
} )

//POST new workout 
router.post('/' ,(req, res) => {
    res.json({mssg: ' POST new workout'})
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