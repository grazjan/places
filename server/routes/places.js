import express from 'express';
import { getPlaces, addPlace } from '../controllers/places.js';

const router = express.Router();

router.get('/', getPlaces);
router.post('/', addPlace);


export default router