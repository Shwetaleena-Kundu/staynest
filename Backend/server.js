const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
     res.send("Welcome to StayNest Backend!");
});

app.get("/stays", (req, res) => {
    res.send("Here are all StayNest stays!");
});
app.get("/api/stays", (req, res) => {

    res.json({
        name: "Oceanview Villa",
        location: "Bali",
        price: 250
    });

});
app.listen(PORT, () => {
    console.log(`StayNest server is running on port ${PORT}`);
});