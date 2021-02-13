import { User } from '../models/user';
import { Db, MongoClient } from 'mongodb';

const mongoClient = require('mongodb').MongoClient;
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';

function connect(): Promise<Db> {
    return mongoClient.connect(dbUrl, { useUnifiedTopology: true })
        .then((client: MongoClient) => client.db('test'));
}

function fetchAll(): Promise<User[]> {
    return connect()
        .then((connection: Db) => connection.collection('users').find().toArray());
}

function insert(user: User): Promise<boolean> {
    return connect()
        .then((connection: Db) => connection.collection('users').insertOne(user)
        .then(() => true));
}

export { insert, fetchAll };