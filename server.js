require('dotenv').config();
const express = require('express');

const employeesRouter = require('./routers/employee.route');
const reviewsRouter = require('./routers/review.route');
const eventRouter = require('./routers/event.route');

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/employees',employeesRouter);
app.use('/api/reviews',reviewsRouter);
app.use('/api/events',eventRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode).send('oops There is an error in the server😥, please try later...');
});

app.listen(port,host,()=>{
console.log(`server running at http://${host}:${port}`);
});

