import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { router } from '@/routes/router';
import studentRoutes from './routes/studentRoutes';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Server is running!'));
app.use('/api', router);
// app.use('/api', router);
app.use('/studentRoutes', studentRoutes);
app.listen(port, () => {
 console.log(`App listening on port: ${port}`);
});