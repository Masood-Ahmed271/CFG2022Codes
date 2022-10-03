# CodeForGood2022


## Commands Used for Setup:

If you download from this repository, I believe, you should be able to run the app. 

To run frontend, go to client folder and run the following command.

` npm start `

To run the backend, go to server folder, and run the following commands:

` npm install ` To Install Dependencies. <br>
` nodemon app.js ` To run the server.


# Note: If you wann install dependencies manually, below are the commands.

` sudo npm install -g --force nodemon ` <br>
` npm install express-session ` <br>
` npm install jquery ` <br>
` npm install xml2js ` <br>
` npm install --save monk ` <br>
` npm install cors ` <br>
` npm install axios ` <br>
` npm install react-router-dom --save ` <br>
And Much more .....



### Just for reference, backend template was generated from the following command:

` npx express-generator `

### Just for reference, frontend template was generated from the following command:

` npx create-react-app client `

<br/>

### To Run MongoDB

<br/>

*Commands For MacOS!!*

Terminal 1 to run mongo server:

```terminal/cmd
mongod --dbpath YourPath/test/data
```

Terminal 2 to open mongo and add data:

```terminal/cmd
mongo
```

*Commands For Windows!!*

Terminal 1 to run mongo server:

```terminal/cmd
./bin/mongod --dbpath YourPath/test/data
```

Terminal 2 open mongo and add data:

```terminal/cmd
./bin/mongo
```