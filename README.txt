For this REST API I used Node.js and build the server with Express.js
For the database used MySQL and and i worked on MySQL Workbench.

Initially I create the server with Express.js and and later on install mySQL for the database,
cors so we don't get errors in the browser, nodemon so we don't have to restart the server everytime 
we make a change and dotenv we make sure we use env variables to access the API point
**Autoloading routes
import fs from 'fs' (stands for file system)
fs.readdirSync('./route').map((r) => app.use('/api', require(`./routes/${r}`)));  (With this all the routes will be automatically loaded so we dont have to import them every time)


I then create the connection and connect to the database. Also create
the MySQL database table.

Now that everything is connected I start to make the CRUID operation.
First create a folder called routes and inside that crate a members.js file which will have all the CRUID routes

Lated I created another folder named controllers with a file name of members.js as well, where inside there will be held all 
of the programm's controllers.

I used postman to make sure everything is working properly




