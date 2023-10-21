const express = require ('express');
const router = express.Router();
const { getDogs, updateDog, addDog, deleteDog } = require('../controllers/dogController')

router.route('/').get(getDogs).post(addDog)
router.route('/:id').put(updateDog).delete(deleteDog)



module.exports = router