require('dotenv').config();
const express = require('express');
const cors = require('cors');

const employeesRouter = require('./routers/employee.route');
const reviewsRouter = require('./routers/review.route');
const eventRouter = require('./routers/event.route');
const attendanceRouter = require('./routers/attendance.route');
const employee_eventsRouter = require('./routers/employee_event.route');
const userRouter = require('./routers/user.route');
const authentocationRouter = require('./routers/authentication.route');


const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use(cors());
app.use('/api/employees',employeesRouter);
app.use('/api/reviews',reviewsRouter);
app.use('/api/events',eventRouter);
app.use('/api/attendances',attendanceRouter);
app.use('/api/employee_events',employee_eventsRouter);
app.use('/api/users',userRouter);
app.use('/api/authentication',authentocationRouter);



app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode).send('oops There is an error in the server😥, please try later...');
});

 
app.listen(port,host,()=>{
console.log(`server running at http://${host}:${port}`);
});

