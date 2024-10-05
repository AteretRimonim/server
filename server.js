require('dotenv').config();
const express = require('express');

const employeesRouter = require('./routers/employee.route');

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/employees',employeesRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('oops There is an error in the server😥, please try later...');
});

app.listen(port,host,()=>{
console.log(`server running at http://${host}:${port}`);
});

