require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/test', (req, res) => {
    res.send({"status" : 200});
});

app.use('/api', routes);

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
