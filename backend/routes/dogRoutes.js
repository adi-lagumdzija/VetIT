const express = require ('express');
const router = express.Router();
const { getDogs, updateDog, addDog, deleteDog } = require('../controllers/dogController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getDogs).post(protect, addDog)
router.route('/:id').put(protect, updateDog).delete(protect, deleteDog)



module.exports = router