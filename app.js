const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/login", function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Success Full")
    }
})
const user = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    email: {
        type: String,
        requred: true
    },
    password: {
        type: Number,
        requred: true
    }
})

const Userlogin = new mongoose.model("Userlogin", user)


const createDocument = async() => {
    try {
        const firstUser = new Userlogin({
            name: "Debkumar Das",
            email: "debkumard04@gmail.com",
            password: 123456
        })
        const secondUser = new Userlogin({
            name: "Hiranmoy Poria",
            email: "hiru@gmail.com",
            password: 123456
        })

        const thirdtUser = new Userlogin({
            name: "Sudip Bhanja",
            email: "sudip@gmail.com",
            password: 123456
        })

        const fourthUser = new Userlogin({
            name: "Tinku Hembram",
            email: "tinku@gmail.com",
            password: 123456
        })


        const result = await Userlogin.insertMany([firstUser, secondUser, thirdtUser, fourthUser])
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
createDocument()