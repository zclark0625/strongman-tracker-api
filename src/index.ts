import mongoose from "mongoose";
import api from "./api";

const PORT = 8080;
const DB_IP = "127.0.0.1";
const DB_PORT = 27017;
const DB_NAME = "tracker";

api.listen(PORT, () => console.log(`Strongman Tracker API listening on port ${PORT}!`));

mongoose.connect(
    `mongodb://${DB_IP}:${DB_PORT}/${DB_NAME}`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if (err) {console.error("DB Connection Failed \n", err);}
        else {console.log(`DB Connection ${DB_NAME} Successful!`);}
    }
);
