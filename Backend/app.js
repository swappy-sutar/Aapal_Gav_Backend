import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) =>{
    res.json({
      success: true,
      message: "Server is running",
    });
});

export {app};
