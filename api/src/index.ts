import { Request, Response } from 'express';
import { insert, fetchAll } from './db/users';
import createCollection from './migrations/create-db';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
createCollection();

app.get('/api/users', async (req: Request, res: Response) => {
    try {
        const result = await fetchAll();
        res.send(result);
    } catch {
        res.statusCode = 400;
        res.send();
    }
});

app.post('/api/users', async (req: Request, res: Response) => {
    const { name, surname, email } = req.body;
    if (!name || !surname || !email) {
        res.statusCode = 400;
        res.send();
    }
    try {
        await insert({ name, surname, email });
        res.statusCode = 200;
        res.send();
    } catch {
        res.statusCode = 400;
        res.send();
    }
});

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`);
})
