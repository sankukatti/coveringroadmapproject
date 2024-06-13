const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('Hella');
});

app.listen(process.env.PORT, () => {
    console.log(`App started listening at port ${process.env.PORT}`);
})