//Import db Configuration
import {connect} from "@/dbConfig/dbConfig";

//Import Model
import User from "@/models/userModel";
// Import Nextjs default request and response
import {
    NextRequest,
    NextResponse
} from "next/server";

//Import bcryptjs 
import bcryptjs from "bcryptjs"

connect()

export async function POST({request}) {
  
    try {
        const reqBody = await request.json();
        const {
            username,
            email,
            password
        } = reqBody

        console.log("Username : " + username);

        //check if the user already exists
        const user = User.findOne({
            email
        })

        if (user) {
            return NextResponse.json({
                message: "User already exists",
            }, {
                status: 400
            })
        }
        let hashPassword;
        if (password.length > 0) {
            const saltRound = bcryptjs.genSalt(10)
            hashPassword = bcryptjs.hash(password, saltRound)
        }

        if (!user && hashPassword) {
            const newUser = new User({
                username,
                email,
                password: hashPassword
            })

            const savedUser = await newUser.save()

            if (savedUser) {
                console.log(savedUser);
            }

            return NextResponse.json({
                message: "Created user successfully",
                status: 200
            })
        }


    } catch (error) {
        console.log("Error from server post error");
        return NextResponse.json({
            message: error.message,
            status: error.status
        })
    }
}



