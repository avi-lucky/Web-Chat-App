const http = require('http');
const express = require('express')
const User = require('../models/user')
const router = new express.Router()

// SignUp User
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// LogIn User
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findOne([req.body.email, req.body.password])
        res.send({user})
    } catch (e) {
        res.status(400).send()  
    }
})

module.exports = router