'use strict'

const firebase = require('../db')
const User = require('../models/user')
const firestore = firebase.firestore()

const addUser = async (req, res, next) => {
    try {
        const data = req.body
        await firestore.collection('users').doc().set(data)
        res.send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await firestore.collection('users')
        const data = await users.get()
        const userArray = []
        if (data.empty) {
            res.status(404).send('No users found')
        } else {
            data.forEach(doc => {
                const user = new User(
                    doc.data().id,
                    doc.data().user_type,
                    doc.data().username,
                    doc.data().password,
                    doc.data().first_name,
                    doc.data().last_name,
                    doc.data().email,
                    doc.data().phone,
                    doc.data().user_company_projects
                )
                userArray.push(user)
            })
            res.json(userArray)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if (!data.exists) {
            res.status(404).send('User with the given ID not found');
        } else {
            res.json(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser
}