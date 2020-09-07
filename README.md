
![Alt Text](https://media.giphy.com/media/E7ClVqqCl8bVS/giphy.gif)

# **About**

Jokenpo is a Japanese game, where two players choose one of three possible items: Rock, Paper or Scissors. The objective is to make a Jokenpo judge who, given the two players' move, informs the result of the match.

**Reference Dojo: http://dojopuzzles.com/problemas/exibe/jokenpo/**
# **Getting Started**
Getting up and running is as easy as 1, 2, 3, 4. 

1. Make sure you have [Node.js](https://nodejs.org/en/download/) and npm installed.

2. Install your dependencies
  
    >cd Jokenpo
    start your app

3. npm start

4. Execute with [postman](https://www.postman.com/) and change to the allowed values **rock, paper and scissors** to received the game result.
<br>Example: http://localhost:3000/getResultGame?playerOne=paper&playerTwo=rock

# Testing
Simply run **npm test** and all tests in the test/ directory will be run.

# Endpoint

|   HTTP VERB   |  Endpoint  | Description    |
| :---         |     :---:      |  :---: |
| GET  | /getResultGame | Return the result of the game using **query:playerOne, playerTwo**|

# Deploy your application in Docker
Let's build the created docker. Make sure you are in the project's root directory on your terminal and run the following command.

>docker build -t app-node-jokenpo .

***and run container...***

>docker run -p 3000:3000 app-node-jokenpo

