'use strict'

const firebase = require('../db')
const UserCP = require('../models/userCompProj')
const firestore = firebase.firestore()

const addUserCP = async (req, res, next) => {
    try {
        const data = req.body
        await firestore.collection('user-projects-companies').doc().set(data)
        res.send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUserCP = async (req, res, next) => {
    try {
        const id = req.params.id
        const usersCP = await firestore.collection('user-projects-companies').doc(id)
        const data = await usersCP.get()
        if (!data.exists) {
            res.status(404).send('User with the given ID not found');
        } else {
            res.json(data.data().user_company_projects)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUserCP,
    getUserCP
}