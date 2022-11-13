import Place from '../models/place.js';

export const getPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.status(200).json(places)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addPlace = async (req, res) => {
    const place = req.body;
    console.log(req)
    const newPlace = new Place(place)

    try {
        await newPlace.save();
        res.status(201).json(newPlace)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}