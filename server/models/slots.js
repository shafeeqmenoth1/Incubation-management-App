const mongoose = require('mongoose')
 

const slotsSchema = new mongoose.Schema({
    slot: { type: Number, required: true },
    section: { type: String, required: true },
    selected:{type:Boolean ,default : false},
    company: { type: String, required: true }
})

const Slots = mongoose.model('slot', slotsSchema)

module.exports = Slots
