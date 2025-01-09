import dotenv from 'dotenv';
dotenv.config();
import { app } from './app.js';
import { DB_Connection } from './Config/Database_Connection.js';

DB_Connection().then(() => {
    app.listen(process.env.PORT || 4000 , () => {
        console.log(`✅ Server is running on port ${process.env.PORT}`);
    });
});