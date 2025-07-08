const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Aqil Humanitarian Platform API');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
