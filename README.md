# 
GamePad (Frontend)
======
Old games, new friends! GamePad is a vintage video game social media app that enables people to connect through their appreciation of old video games. Discover "new" games for consoles released from 1977-1999 and build a collection of favorites. Leave reviews, comments and find new friends that you can follow to see their reviews, ratings and favorite games!

![](gamepad.gif)

Deployed on Heroku: https://game-pad.herokuapp.com

YouTube Demo Video: https://www.youtube.com/watch?v=uQLKLM_15yA

## Features
* Explore a massive database of vintage video games
* Rate and review games and leave comments on other user's reviews
* Ability to follow and unfollow other users
* Create user profile to add games, monitor followers/followings and game reviews/comments
* Find new friends based on personal gaming preferences
* Authenticates and authorizes users via JWT, bcrypt, local storage

![Alt text](src/assets/images/gamepad-logo.png?raw=true 'Logo')

## Application Creation      
  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies
    "axios": "^0.21.1",
    "bootstrap": "^4.5.3",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.1",
    "react-hook-form": "^7.7.1",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "react-toastify": "^6.2.0",
    "react-waypoint": "^9.0.3",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "styled-components": "^5.2.1",
    "uuid": "^8.3.2",
    "uuidv4": "^6.2.6",
    "web-vitals": "^0.2.4"

## How to run the application
  - Clone this backend and the frontend: https://github.com/kylefarmer85/gamepad-react-frontend
  - Navigate to the backend directory and run `$ bundle install`
  - Next, migrate the database `$ rails db:migrate`
  - Get your own RAWG API access key https://rawg.io/apidocs and save it as a Rails env variable in an .env file like this `RAWG_API_KEY=<your key here>`
  - To start the server run `$ rails s`
  - The API will begin running on localhost:3000
  - Navigate to the frontend directory
  - Run `$ npm install`
  - Run `$ npm start` and the app will load on localhost:3001

Created using the excellent RAWG API - https://rawg.io/apidocs
