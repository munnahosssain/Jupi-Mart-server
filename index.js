const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

async function run() {
    try {

    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("HEllO JUPI-MART!");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})