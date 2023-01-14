const express = require('express')
const app = express()
const pool = require('../configs/connectDB')

let getWeb = async (req, res) => {
    await pool.execute(
        `select * from users`,
        (err, result, field) => {
            console.log(result)
            return res.render('index', {data: result})
        }
    )
}

let createUser = async (req, res) => {
    let {fullName, age, gender, id, email} = req.body;
    let fullNameArr = fullName.split(" ")
    let firstName = fullNameArr[0]
    let lastName = fullNameArr[fullNameArr.length - 1]
    
    fullNameArr.pop()
    fullNameArr.shift()
    console.log(fullNameArr)
    let middleName = fullNameArr.join(" ")
    await pool.execute(
        `insert into users(firstName, middleName, lastName, age, gender, ID, email) 
                     values(?, ?, ? , ?, ?, ?, ?)`,
        [firstName, middleName, lastName, age, gender, id, email]
    )
    return res.redirect('/')
}

module.exports = {
    getWeb,
    createUser
}