import mongoose from "mongoose";

export async function connect() {
    try {

        // const connection = await mongoose.connect(process.env.MONGO_URL)

        // connection.on('connected', () => {
        //     console.log('*******mongoose connection established*******');
        // })

        // connection.on('error', (err) => {
        //     console.log('*******mongoose connection failed:***** ' + err);
        // })


        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('mongoose connection established');
        }).catch(err=>{
            console.log('*******mongoose connection failed:***** ' + err);
            process.exit();
        })




    } catch (error) {
        console.log('******something went wrong******' + error.message);
    }
}
export default connect