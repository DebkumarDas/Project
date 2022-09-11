// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/login", (err)=> {
//     if (!err) {
//         const user = new mongoose.Schema({
//             name: {
//                 type: String,
//                 required: true
//             },
//             email: {
//                 type: String,
//                 required: true
//             },
//             password: {
//                 type: Number,
//                 required: true
//             }
//         })

//         const Userlogin = new mongoose.model("Userlogin", user)


//         const createDocument = async() => {
//             try {
//                 const firstUser = new Userlogin({
//                     name: "Debkumar Das",
//                     email: "debkumard04@gmail.com",
//                     password: 123456
//                 })
//                 const secondUser = new Userlogin({
//                     name: "Hiranmoy Poria",
//                     email: "hiru@gmail.com",
//                     password: 123456
//                 })

//                 const thirdtUser = new Userlogin({
//                     name: "Sudip Bhanja",
//                     email: "sudip@gmail.com",
//                     password: 123456
//                 })

//                 const fourthUser = new Userlogin({
//                     name: "Tinku Hembram",
//                     email: "tinku@gmail.com",
//                     password: 123456
//                 })


//                 const result = await Userlogin.insertMany([firstUser, secondUser, thirdtUser, fourthUser])
//                 console.log(result)
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         createDocument()
//         console.log("Login Success Full")
//     } else {
//         console.log(err)
//     }
// })

const express = require('express')
const app = express()
app.use(express.json())
const port = 3000;

// app.get("/home",(req,res)=>{

// })
app.post("/home", (req, res) => {
    const login = { userId: String, Password: Number }
    let userid = new userId
    let password = new Password
})