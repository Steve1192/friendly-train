JavaScript Phase-1 Final Project Documentation

Brainstorm: 
Alright I'm thinking something with balldontlie API. ALL DATA COURTESY OF:  https://www.balldontlie.io/#introduction .
This API contains a large dataset including NBA players past and present, player stats, game stats, and team information. 

This needs to contain three unique eventlisteners. SO far I have a DOMContentloaded to load the players list onto the webpage. I'm thinking I need a search bar (html form) and a submit button. The submit button should count as another event listener. Then I'm thinking something where I click and change colors of the text or something. Maybe the player you click on changes to the color of his team? And you can toggle it back and forth. Oh Wait what about an NBA guessing game?

Yeah let's call this idea Poeltl Lite, or maybe You Don't Know Ball.
NBA guessing game idea: get a random player from the players list and you get 3 tries to guess the current team hes on. You can reset the game as many times as you want. Always just 5 guesses. That's a great idea I think I'm doing that. 

Design stage/psuedocode:
I am supposed to use a fetch request for this assignment anyway. So I start with a fetch request from the API, followed byt the double then's. From there I render a single player.
Did that with a math.random() method. Then I pull a random corresponding player and team from the two arrays I created after the then's. The random player/team combo is pulled using the randomly generated number. The player is displayed on the screen and then the user is prompted to guess. I hooked up an event listener to the submit button with a prevent.Default, and the wrong guesses are displayed on the page for the user. If the user gets it right the output message displays "You got it, 'player x' played for 'team x'. The only real way to stop the game is to submit 6 incorrect guesses. On the 6th incorrect guess the whole page reloads. I did that last bit with nested if else statements and a counter variable.

Directions for user:
Every time this page loads a NBA player from 1979 to today will be generated. Your NBA knowledge is seriously lacking and I know you don't know ball. For current players, you guess the team they're on. For Former players, guess the team they played on the longest. You get 5 guesses. If you submit a 6th incorrect guess the page will reload and a new player will be generated. Keep in mind, spelling counts and the first letter of the team city and team name must be capitalized-- YOU DON'T KNOW BALL !!!




FEATURES I WOULD LIKE TO ADD IN THE FUTURE:
I make a score counter on the screen, and post a leaderboard. Wow (lol), I think I literally just developed a great idea while blogging.
Should fix the case sensitivity*
