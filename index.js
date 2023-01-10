let playersArray = [];
let teamsArray = [];  
let rando = Math.floor(Math.random() * 100);
const guessesContainer = document.getElementById("wrong-guesses");
const outputMessage = document.getElementById("output message");
const playerGuessesContainer = document.getElementById("guess-my-team-form");
const title = document.getElementById("title");
let i = 0 ;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
    .then(resp => resp.json()) 
         .then(players => renderPlayer(players.data));
        })

    function renderPlayer(players)
    {const renderAPlayer = document.getElementById("rando-player");   
      players.forEach(guy => {
        playersArray.push(guy.first_name + ' ' + guy.last_name)
        teamsArray.push(guy.team.city + ' ' + guy.team.name)
                            })
        const dude = document.createElement('div');  
        dude.innerHTML = playersArray[rando] 
        console.log(playersArray[rando])
        console.log(teamsArray[rando])
        renderAPlayer.appendChild(dude);    
    }

    
    playerGuessesContainer.addEventListener('submit', function(e) 
    {
        e.preventDefault();
        let playerGuess = e.target.querySelector('input').value;     
          if (playerGuess == teamsArray[rando])
          { outputMessage.innerHTML = "YOU GUESSED IT! It was: " + playerGuess }
        
          else
         { i ++
            outputMessage.innerHTML = "YOU'RE A BAD BASKETBALL FAN"
            let wrongGuess = document.createElement('li')
            wrongGuess.innerHTML = playerGuess
            guessesContainer.appendChild(wrongGuess)
                      if (i == 5)
                      {outputMessage.innerHTML = "The team " + playersArray[rando] + " played for most in his career was the " + teamsArray[rando] + "."; }

                      else if (i == 6) 
                      {window.location.reload();}
          }
        e.target.reset(); 
    });
      
      title.addEventListener("mouseover", function() {
          if (title.style.color === "black") 
          { title.style.color = "red";} 

          else if (title.style.color === "red") 
          {title.style.color = "blue";} 
          
          else {title.style.color = "black";}
      });