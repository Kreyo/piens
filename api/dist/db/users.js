"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAll = exports.insert = void 0;
var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017';
function connect() {
    return mongoClient.connect(dbUrl, { useUnifiedTopology: true })
        .then(function (client) { return client.db('test'); });
}
function fetchAll() {
    return connect()
        .then(function (connection) { return connection.collection('users').find().toArray(); });
}
exports.fetchAll = fetchAll;
function insert(user) {
    return connect()
        .then(function (connection) { return connection.collection('users').insertOne(user)
        .then(function () { return true; }); });
}
exports.insert = insert;
//# sourceMappingURL=users.js.map