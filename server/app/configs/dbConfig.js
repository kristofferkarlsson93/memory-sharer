'use strict';

const admin = require("firebase-admin");
var serviceAccount = require("../../private/memory-sharer-firebase-adminsdk-wgkhq-e89fa20043.json");

const firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://memory-sharer.firebaseio.com/"
});

const db = admin.database();
const ref = db.ref("server");
const usersRef = ref.child('users');

module.exports = {
    ref,
    usersRef
};