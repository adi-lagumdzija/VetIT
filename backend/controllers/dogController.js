// @desc Get dogs
// @route GET /api/dogs
// @access Private
const getDogs = (req, res) => {
    res.status(200).json({message: 'Get dogs'})
}

// @desc Add dog
// @route POST /api/dogs
// @access Private
const addDog = (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error ('Please add fields')
    }
    res.status(200).json({message: 'Add dogs'})
}

// @desc Update dog
// @route PUT /api/dogs
// @access Private
const updateDog = (req, res) => {
    res.status(200).json({message: `Update dog ${req.params.id}`})
}

// @desc Delete dog
// @route DELETE /api/dogs
// @access Private
const deleteDog = (req, res) => {
    res.status(200).json({message: `Delete dog ${req.params.id}`})
}

module.exports = {
    getDogs,
    addDog,
    updateDog,
    deleteDog
}