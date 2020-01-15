const express = require('express');
const sql = require('mssql')
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);

const config = {
  user: 'sas',
  password: 'Mypassword456',
  server: 'DEVSQL_2014', // You can use 'localhost\\instance' to connect to named instance
  database: 'TestDBWebsite',
}

//AdminView users just pulls the users from the database
app.get('/admin-view-users', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from Users2 ', function (err, recordset) {

          if (err) console.log(err)

         // send records as a response
          
          res.json(recordset)
          
      });
  });
});
//AdminView users just pulls the users from db the with high severity
app.get('/admin-view-users-severity-high', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from Users2 where severity=1', function (err, recordset) {

          if (err) console.log(err)

         // send records as a response
          
          res.json(recordset)
          
          
          

      });
  });
});

app.get('/admin-view-users-severity-medium', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from Users2 ', function (err, recordset) {

          if (err) console.log(err)

         // send records as a response
          
          res.json(recordset)
        
      });
  });
});

app.get('/admin-view-users-severity-medium', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from Users2 ', function (err, recordset) {

          if (err) console.log(err)

         // send records as a response
          
          res.json(recordset)
          
          
          

      });
  });
});
app.get('/user-questions', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from Questions ', function (err, recordset) {

          if (err) console.log(err)

         // send records as a response
          
          res.json(recordset)
          
          
          

      });
  });
});






// app.get('/admin-view-users', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'user ', lastName: 'Doe',  email : 'user1@gmail'},
//     {id: 2, firstName: 'John', lastName: 'smith',  email : 'user1.2@gmail'}, 
//     {id: 3, firstName: 'Mary', lastName: 'dench', email : 'user2@gmail'},
//   ];

//   res.json(customers);

// });














