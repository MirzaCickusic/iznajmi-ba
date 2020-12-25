const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

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
        canton: body.canton,
        registration_date: new Date,
        telephone: body.telephone,
        address: body.address
    })

    const savedUser = await user.save()

    response.json(savedUser)
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

module.exports = usersRouter