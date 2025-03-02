import express from 'express';
import cors from 'cors';
import { adminRouter }  from './src/routes/AdminRoute.js';

const app = express();
const port = 3000;



app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))



app.use(express.json());
app.use('/auth', adminRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Server started on port 3000')
});

