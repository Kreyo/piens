import { Db, MongoClient } from 'mongodb';

const mongoClient = require('mongodb').MongoClient;
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';

function connect(): Promise<Db> {
    return mongoClient.connect(dbUrl, { useUnifiedTopology: true })
        .then((client: MongoClient) => client.db('test'));
}

async function createCollection(): Promise<void> {
    connect().then(result => result.createCollection('users'));
}

export default createCollection;