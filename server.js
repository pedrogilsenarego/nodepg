import { express } from "express";

const app = express();

const port = 8080;

app.listen(port, () => console.log(`app listening on port ${port}`));
