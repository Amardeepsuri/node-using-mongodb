import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { routes } from "./src/routes/routes";

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
