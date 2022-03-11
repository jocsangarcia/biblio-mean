const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    phone: {
        type: String,
    },

    direction: {
        type: String,
    },

    nacionalidad: {
        type: String,
    },

    password:{
        type: String,
    },

    date:{
        type: Date,
        default: Date.now
    },

})

userSchema.method.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        direction: this.direction,
        nacionalidad: this.nacionalidad,
    },  "secretKey")
}

const User = mongoose.model('user',userSchema)
module,exports.User = User