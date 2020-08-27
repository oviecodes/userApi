const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/User')
const { unsubscribe } = require('../routes/userRoute')

const createUser = async (req, res) => {
    const name = req.body.name
    const username = req.body.username
    try {
        const user = await User.create({ name, username  })
        return res.status(201).json({name: user.name, username: user.username})
    } catch (error) {
         return res.status(404).send('an error occured')
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json({users})
    } catch (error) {
         return res.status(404).send('an error occured')
    }
}

const getUser = async(req, res) => {
    try {
        const user = await User.findOne({_id: req.params.userid})
        return res.status(200).json({ name: user.name, username: user.username })
    } catch(err) {
        console.log(err)
        return res.status(404).send('an error occured')
    }
}


const updateUser = async(req, res) => {
    const id = req.params.userid
    const name = req.body.name
    const username = req.body.username
    try{
        const user = await User.findOneAndUpdate( {_id: id}, {name, username}, { new: true })
        return res.status(201).json({name: user.name, username: user.username})
    } catch (err) {
        console.log(err)
        return res.status(404).send('an error occured')
    }
    
}

const deleteUser = async(req, res) => {
    const id = req.params.userid
    try{
        const user = await User.findOneAndDelete( {_id: id} )
        return res.status(201).json({ user })
    } catch (err) {
        console.log(err)
        return res.status(404).send('an error occured')
    }
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    getUser
}