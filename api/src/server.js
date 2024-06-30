import express, { json } from 'express';
import authRouter from './routes/authRoutes.js';
import todoTaskRouter from './routes/todoTaskRoutes.js';
import { connectDb } from './config/database.js';

import cors from 'cors';

const app = express();

connectDb();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(todoTaskRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening in port ${port}`));