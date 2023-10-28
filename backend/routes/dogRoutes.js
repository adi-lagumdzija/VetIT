const express = require ('express');
const router = express.Router();
const { getDogs, updateDog, addDog, deleteDog, getDog } = require('../controllers/dogController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getDogs).post(protect, addDog)
router.route('/:id').put(protect, updateDog).delete(protect, deleteDog).get(protect, getDog)



module.exports = router