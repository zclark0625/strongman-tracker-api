import api from "./api";

const port = 8080;

api.listen(port, () => console.log(`Strongman Tracker API listening on port ${port}!`));
