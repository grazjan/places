import express from 'express';
import { getPlaces, addPlace, getPlace } from '../controllers/places.js';

const router = express.Router();

router.get('/', getPlaces);
router.get('/:id', getPlace);
router.post('/', addPlace);


export default router