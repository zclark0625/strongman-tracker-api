import mongoose from "mongoose";
import api from "./api";

const port = process.env.PORT || 8080;
const databaseURI = process.env.DB_URI || "mongodb://127.0.0.1:27017/tracker";

mongoose.connect(
    databaseURI,
    {useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if (err) {console.error("DB Connection Failed \n", err);}
        else {console.log(`DB Connection to ${databaseURI} Successful!`);}
    }
);

api.listen(port, () => {
    console.log(`Strongman Tracker API listening on port ${port}!`);
});
