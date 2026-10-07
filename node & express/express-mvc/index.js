const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());

const router = require('./routes/auth');

app.use('/api/auth/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});