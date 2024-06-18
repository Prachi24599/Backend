import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/Todo.js';
import dbConnect from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Mount the todo API routes
// We can define the directory structure before our routes 
app.use('/api/v1', todoRoutes);

// Connect to the database
dbConnect();


// Default route
app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
