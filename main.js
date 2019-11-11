import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes'

// DB Connection
const dbUrl = 'mongodb://localhost:27017/rpsbackend';
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(mongoose => console.log('Connected successfully to Database at port 27017'))
    .catch(err => console.log(err));
const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);
app.set('port', process.env.PORT || 3000);
const port = app.get('port');


app.listen(port, () => {
    console.log(`Server Started, listening on 127.0.0.1:${port}`);
});
