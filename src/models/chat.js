const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    chat: [{
        sender: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true,
            ref: 'User'
        },
        receiver: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true,
            ref: 'Friend'
        },
        messages: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true
    }
]
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat