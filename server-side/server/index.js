const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const main = require('../main')

app.get("/api_pi", (req, res) => {
    res.json({ pi: `${main.finalPI}` });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); 