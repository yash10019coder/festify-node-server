const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const get = require("./routes/get");
const post = require("./routes/posts");
const user = require("./routes/user");
const ip = require("ip");


require("dotenv/config");
const bodyParser = require("body-parser");

const app = express();
const port = 80;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(get);
app.use(post);
app.use('/user',user)

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://${ip.address()}:${port}`);
});
