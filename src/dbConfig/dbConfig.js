import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL);
        const connection= mongoose.connection

        connection.on('connected', ()=>{
            console.log('mongoose connection established');
        })
        connection.error('error', (err)=>{
            console.log('mongoose connection failed: ' + err.message);
            process.exit();
        })

    } catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
}