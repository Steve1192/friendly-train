let playersArray = [];
let teamsArray = [];  
let rando = Math.floor(Math.random() * 100);
const guessesContainer = document.getElementById("wrong-guesses");
const outputMessage = document.getElementById("output message");
const playerGuessesContainer = document.getElementById("guess-my-team-form");
const title = document.getElementById("title");
const renderAPlayer = document.getElementById("rando-player");
let i = 0 ;
let blinking = false;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
    .then(resp => resp.json()) 
         .then(players => renderPlayer(players.data));
        })

    function renderPlayer(players)
    {   
      players.forEach(guy => {
        playersArray.push(guy.first_name + ' ' + guy.last_name)
        teamsArray.push(guy.team.city + ' ' + guy.team.name)
                            })
        const dude = document.createElement('div');  
        dude.innerHTML = playersArray[rando] 
        console.log(playersArray[rando])
        console.log(teamsArray[rando])
        renderAPlayer.appendChild(dude);    
        return renderAPlayer;
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
      
      title.addEventListener("mouseover", function() 
      {
          if (title.style.color === "black") 
          { title.style.color = "red";} 

          else if (title.style.color === "red") 
          {title.style.color = "blue";} 
          
          else {title.style.color = "black";}
      });

      renderAPlayer.addEventListener("click", function(e)
      {
        if (blinking == false) 
        {renderAPlayer.style.color = 'black'
        stevesInterval = setInterval(function() {
          if (renderAPlayer.style.color === "black")
          {renderAPlayer.style.color = 'orange'}
          else if (renderAPlayer.style.color === 'orange') 
          {renderAPlayer.style.color = 'black';}
                                }, 1000)
          blinking = true;
         }
         else {
          blinking = false;
          clearInterval(stevesInterval);
         }
        
      })


    