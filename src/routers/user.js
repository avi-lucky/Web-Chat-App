const http = require('http');
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
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
        const user = await User.findOne({email:req.body.email, password:req.body.password})
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        console.log(e)
        res.status(400).send()  
    }
})

// Read Login User
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
 })

module.exports = router