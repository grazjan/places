import mongoose from "mongoose";

const placeSchema = mongoose.Schema({
    title: String,
    description: String,
    images: [String],
    lat: Number,
    long: Number,
    city: String,
    countryCode: String,
    location: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

const Place = mongoose.model('Place', placeSchema);
export default Place;