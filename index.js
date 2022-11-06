import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello from Home Page'));

app.use('/users', usersRoute);

app.listen(PORT, () =>
    console.log(`Server Running on Port: http://localhost:${PORT}`)
);
