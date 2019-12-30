const express = require('express');
const sql = require('mssql')
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);

app.get('/admin-view-users', (req, res) => {
  const customers = [
    {id: 1, firstName: 'user ', lastName: 'Doe',  email : 'user1@gmail'},
    {id: 2, firstName: 'John', lastName: 'smith',  email : 'user1.2@gmail'}, 
    {id: 3, firstName: 'Mary', lastName: 'dench', email : 'user2@gmail'},
  ];

  res.json(customers);

});

const config = {
  user: 'sas',
  password: 'Mypassword123',
  server: '10.66.1.24\\DEVSQL_2014', // You can use 'localhost\\instance' to connect to named instance
  database: 'TestDBWebsite',
}

sql.connect(config).then(pool => {
  // Query
  
  return pool.request()
      .input('input_parameter', sql.Int, value)
      .query('select * from Users')
      
}).then(result => {
  console.dir(result)
  
}).catch(err => {
// ... error checks
});



app.get('/admin-view-people', function (req, res) {

  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'sas',
      password: 'MyPassword123',
      server: '10.66.1.24//DEVSQL_2014', 
      database: 'TestDBWebsite' 
  };

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from Users', function (err, recordset) {

          if (err) console.log(err)

          // send records as a response
          res.send(recordset);          
      });
  });
});