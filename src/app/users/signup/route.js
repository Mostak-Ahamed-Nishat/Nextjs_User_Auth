//Import the mongoose setup
import {
    connect
} from '@/dbConfig/dbConfig'

//Import he user model
import User from '@/models/userModel'

//Request and response using nextjs
import {
    NextRequest,
    NextResponse
} from 'next/server'

//Bcrypt password
import bcryptjs from 'bcryptjs'


connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const {
            username,
            email,
            password
        } = reqBody

        console.log(reqBody);

        //check if user already exists 

        const isUserExist = await User.findOne({
            email
        })

        if (isUserExist) {
            return NextResponse.json({
                error: 'User already exists',
                status: error.status
            })
        } else {
            //if there is no user already exists with the same email then make the password hash
            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(password, salt)

            const newUser = new User({
                username,
                email,
                password: hashPassword
            })

            const savedUser = await newUser.save()

            console.log(savedUser);

            return NextResponse.json({
                message: 'User created successfully',
                status: 200,
            })

        }


    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: error.status
        })
    }
}