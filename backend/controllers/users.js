const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//Get all users
usersRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.json(users.map(user => user.toJSON()))
})

//Add user to db
usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        username: body.username,
        email: body.email,
        passwordHash: passwordHash,
        city: body.city,
        registration_date: new Date
    })

    // const savedUser = await user.save()

    const userForToken = {
        username: user.username,
        id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    response
        .status(200)
        .send({token, username: user.username, name: user.name, email: user.email, id:user.id})

})

//Get specific user
usersRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id)
    if (user) {
        response.json(user.toJSON())
    } else {
        response.status(404).end()
    }
})

usersRouter.get('/messages/:id', async (request, response) => {
    const userMessages = await User.findById(request.params.id).messages

    if (userMessages) {
        response.json(userMessages.toJSON())
    } else {
        response.status(404).end()
    }
})

module.exports = usersRouter