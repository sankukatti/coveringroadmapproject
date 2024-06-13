const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const { Users } = require('./users');

dotenv.config();
const app = express();
routes(app);

app.use((err, req, res, next) => {
    if (err && err.id) {
        switch(err.id) {
            case 'USER_NOT_FOUND': res.status(401).send({ error: 'User not found. Un-Authorized' });
        }
    } else {
        res.status(500).send({ error: 'Some-thing went wrong.' });
    }
    
});

app.listen(process.env.PORT, () => {
    console.log(`App started listening at port ${process.env.PORT}`);
});
