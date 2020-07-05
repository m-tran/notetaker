const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static("./public"));

//client route
const clientRoute = require("./routes/client-routes");
app.use(clientRoute);

//api route
const apiRoute = require("./routes/api-routes");
app.use("/api", apiRoute);

app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}`);
});
