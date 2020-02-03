const express = require("express");
const sql = require("mssql");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

var session = require("express-session");
const jwt = require("jsonwebtoken");

var path = require("path");
var cookieParser = require("cookie-parser");

var config = {
  user: "sa",
  password: "Mypassword123",
  server: "WIN10-LAP-HJP", // You can use 'localhost\\instance' to connect to named instance
  database: "CDA"
};
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/admin-view-users", function(req, res) {
  // connect to your database
  sql.connect(config, function(err) {
    if (err) console.log(err + "initial connection");
    console.log(config.server);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Users ", function(err, recordset) {
      if (err) console.log(err);

      // send records as a response

      res.json(recordset);
    });
  });
});

app.get("/user-questions", verifyToken, function(req, res) {
  app.use(function(req, res, next) {
    var token = req.cookies.auth;

    console.log(bearerToken + "before if");
    // decode token
    if (token) {
      console.log(bearerToken);

      jwt.verify(token, "secret", function(err, token_data) {
        if (err) {
          console.info("token did not work");
          return res.status(403).send("Error");
        } else {
          req.user_data = token_data;
          sql.connect(config, function(err) {
            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();

            // query to the database and get the records
            request.execute("dbo.ViewQuestions", function(err, recordset) {
              if (err) console.log(err);

              // send records as a response

              res.json(recordset);
              next();
            });
          });
        }
      });
    } else {
      console.info("no token");
      console.log("no token");
      return res.status(403).send("No token");
    }
  });
});

app.post("/admin-Add-Users", async (req, response) => {
  sql.connect(config, function(err) {
    if (err) {
      console.log(err);
      response.status(400);
      response.send(err);
    } else {
      try {
        var request = new sql.Request();

        var body = req.body;

        console.log(body);

        if (body) {
          var email = body.email;
          var password = body.password;

          request.input("email", sql.VarChar, email);
          request.input("password", sql.VarChar, password);
          request.execute("dbo.RegisterUsers");

          response.status(201);
          response.send("User added ");
          console.log("added user");
        } else {
          response.status(400);
          response.send("no content was provided");
        }
      } catch (e) {
        console.log(e);
        response.status(400);
        response.send(e);
      }
    }
  });
});

app.post("/admin-Add-Users", async (req, response) => {
  sql.connect(config, function(err) {
    try {
      if (err) {
        console.log(err);
        response.status(400);
        response.send(err);
      } else {
        var request = new sql.Request();

        var body = req.body;

        console.log(body);

        if (body) {
          var email = body.email;
          var password = body.password;

          request.input("email", sql.VarChar, email);
          request.input("password", sql.VarChar, password);
          request.query(
            "SELECT * FROM TestLogin WHERE email = @email AND password = @password",
            function(err, recordset) {
              if (err) console.log(err);
              res.json(recordset);
            }
          );

          response.status(201);
          response.send("User added ");
          console.log("added user");
        } else {
          response.status(400);
          response.send("no content was provided");
        }
      }
    } catch (e) {
      console.log(e);
      response.status(400);
      response.send(e);
    }
  });
});

app.post("/login", async (req, response) => {
  try {
    await sql.connect(config);

    var request = new sql.Request();
    var Email = req.body.email;
    var Password = req.body.password;

    console.log({ Email, Password });

    request.input("Email", sql.VarChar, Email);
    request.input("Password", sql.VarChar, Password);

    var queryString =
      "SELECT * FROM TestLogin WHERE email = @Email AND password = @Password";

    //"SELECT * FROM RegisteredUsers WHERE email = @Email AND Password = HASHBYTES('SHA2_512', @Password + 'skrrt')";

    const result = await request.query(queryString);

    if (result.recordsets[0].length > 0) {
      console.info("correct details");
      var token = jwt.sign(
        { Email },
        "secret",
        { expiresIn: "30s" },
        (err, token) => {
          res.json({
            token
          });

          res.cookie("auth", token);
          res.send("ok");

          console.log(req.body);
        }
      );
    } else {
      console.info("/login: bad creds");
      response.status(400).send("Incorrect email and/or Password!");
    }
  } catch (err) {
    console.log("Err: ", err);
    response.status(500).send("Check api console.log for the error");
  }
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value

  console.log("Header cookies: ", JSON.stringify(req.headers.cookie));

  const bearerHeader = req.cookies["auth"];

  console.log(bearerHeader);

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(port, () => console.log(`Server running on port ${port}`));
