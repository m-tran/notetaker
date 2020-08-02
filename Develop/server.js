const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static("./public"));

const clientRoute = require("./routes/client-routes");
const apiRoute = require("./routes/api-routes");

app.use(clientRoute, apiRoute);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
