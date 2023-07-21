import mongoose from "mongoose";


const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model('User', userSchema)

export default User

// var Schema = mongoose.Schema;

// var SomeModelSchema = new Schema({
// mongoose.connect(mongoDB, { useNewUrlParser: true })
//         a_string: String,
//          a_date: Date
// });
// // Compile model from schema
// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );