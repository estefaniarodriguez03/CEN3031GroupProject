import mongoose from "mongodb"

const Schema = mongoose.Schema

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    personality: {
        type: String,
        required: true
    }
})

export default mongoose.model('Pet', petSchema)