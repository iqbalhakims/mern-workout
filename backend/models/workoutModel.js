const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = newSchema ({
    title: {
        type: String,
        required:true
    },
    reps:{
        type: Number,
        required:true
    },
    load:{
        type: Number,
        required:true
    }


},{ timestamp: true})

module.exports = mongoose.model('Workout', workoutSchema)

workoutSchema.find()