const asyncHandler = require('express-async-handler')
const Dogs = require ('../models/dogModel')
const User = require ('../models/userModel')


// @desc Get dog
// @route GET /api/dogs
// @access Private
const getDog = asyncHandler (async (req, res) => {
    const dog = await Dogs.findById(req.params.id)

    if(!dog){
        res.status(400)
        throw new Error('Dog not found')
    }
    //checking user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    res.status(200).json(dog)
})

// @desc Get dogs
// @route GET /api/dogs
// @access Private
const getDogs = asyncHandler (async (req, res) => {
    const dogs = await Dogs.find()
    res.status(200).json(dogs)
})

// @desc Add dog
// @route POST /api/dogs
// @access Private
const addDog = asyncHandler (async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error ('Please add fields')
    }
    const name = await Dogs.create({
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        id:req.body.id,
        user: req.user.id
    })
    res.status(200).json(name)
})

// @desc Update dog
// @route PUT /api/dogs
// @access Private
const updateDog = asyncHandler (async (req, res) => {
    const dog = await Dogs.findById(req.params.id)

    if(!dog){
        res.status(400)
        throw new Error('Dog not found')
    }

    //checking user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //checking that logged in matches the dog
    if(dog.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedDog = await Dogs.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedDog)
})

// @desc Delete dog
// @route DELETE /api/dogs
// @access Private
const deleteDog = asyncHandler (async (req, res) => {
    const dog = await Dogs.findById(req.params.id)

    if(!dog){
        res.status(400)
        throw new Error('Dog not found')
    }



    //checking user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //checking that logged in matches the dog
    if(dog.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await dog.deleteOne()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getDogs,
    addDog,
    updateDog,
    deleteDog,
    getDog,
}