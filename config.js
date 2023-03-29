'use strict'
const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSEGING_SENDER_ID,
    APP_ID
} = process.env

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyD-GWTc-uIeCIfwF77n6Yd8s4ZDXBqr3bg",
        authDomain: "help-desk-server-66fd2.firebaseapp.com",
        projectId: "help-desk-server-66fd2",
        storageBucket: "help-desk-server-66fd2.appspot.com",
        messagingSenderId: "1062619102259",
        appId: "1:1062619102259:web:d31cf49abd224280a87746"
    }
}