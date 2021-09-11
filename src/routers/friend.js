const http = require('http')
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const db = require('../db/mongoose')

// Create New Friends
router.post('/friends', auth, async (req, res) => {
    const user = await User.findOne({email:req.user.email})
    try {
        await user.friends.push({name: req.body.name, email: req.body.email})
        await user.save()
        res.status(200).send(user.friends[user.friends.length - 1])
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

// Read All Friends
router.get('/friends', auth, async (req, res) => {
    try {
        const user = await User.findOne({email:req.user.email})
        // console.log(user)
        res.send(user.friends)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Find Friend By ID
router.get('/friends/:id', auth, async (req, res) => {
    const _id = req.params.id
    console.log(_id)
    // const user = await User.findOne({email: req.user.email})
    try {
        // var friend = await User.friends.find({_id: _id})
        //     .then((result) => {
        //     console.log(result)
        //     })
        //     .catch((error) => {
        //      console.log(error)
        // })
        console.log(db)
        await User.findOne({'friends_id': _id})
         .then((result) => {
             console.log(result.friends.filter({"_id": _id}))
         })
         .catch((error) => {
             console.log(error)
         })
        
        // console.log(user)
        // .then((result) => {console.log(result.friends.filter)})
        // .catch((error) => {console.log(error)})
        
        // if (!user.friends) {
        //     return res.status(404).send()
        // } else {
        //   return res.status(200).send(user.friends)
        // }
    } catch (e) {
        res.status(500).send(e)
        console.log(e)
    }
})

module.exports = router