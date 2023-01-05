//guess my team NBA game
let playersArray = [];//storing all players in an array
let teamsArray = [];  //storing all CORRESPONDING teams in an array
let rando = Math.floor(Math.random() * 100);
//console.log(rando); // Outputs a random integer between 0 and 999
const guessesContainer = document.getElementById("wrong-guesses");
const outputMessage = document.getElementById("output message");
const playerGuessesContainer = document.getElementById("guess-my-team-form");
const title = document.getElementById("title");

document.addEventListener('DOMContentLoaded', () => {

    
    fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
    .then(resp => resp.json()) //breaks fown json data from API
         .then(players => renderPlayer(players.data));
         
    function renderPlayer(players)
    {//console.log(players) i know this works but its my security blanket, it's the object full of player objects
        const renderAPlayer = document.getElementById("rando-player");     //SO THIS NEEDS TO BE CHANGED ULTIMATELY TO ONE SINGLE PLAYER SOMWHERE IN HERE
    players.forEach(guy => {
        
    //coming up with how to store these names in an array for later use
    playersArray.push(guy.first_name +' ' + guy.last_name)
    teamsArray.push(guy.team.city +' ' + guy.team.name)


    })
        

        const dude = document.createElement('div');  //.create single div for 1 random player off the 100 random NBA players list
        dude.innerHTML = playersArray[rando] 
        console.log(playersArray[rando])
        console.log(teamsArray[rando])
        renderAPlayer.appendChild(dude);    
    //SO NOW WE HAVE STORED AN ARRAY OF NBA PLAYERS AND THEIR CORRESPONDING TEAMS
   
    }
    let i = 0
    playerGuessesContainer.addEventListener('submit', function(e) {
        e.preventDefault();
      
        
        // use the e.target object to get the value of the input element
        let playerGuess = e.target.querySelector('input').value;          //I need to work on understanding query selector methods better
                                                                            //I kmow that 'input' just pulls out the first element that is an input on the page
        console.log(playerGuess);


        if (playerGuess == teamsArray[rando])
        {
            outputMessage.innerHTML = "YOU GUESSED IT! It was: " + playerGuess
           // console.log("YOU GUESSED IT!");
    
        }
        
        else
        { i ++
            outputMessage.innerHTML = "YOU'RE A BAD BASKETBALL FAN"
            //console.log("YOU'RE A BAD BASKETBALL fFAN");
            let wrongGuess = document.createElement('li')
            wrongGuess.innerHTML = playerGuess
            guessesContainer.appendChild(wrongGuess)
            if (i == 5)
            {
                outputMessage.innerHTML = "The team " + playersArray[rando] + " played for most in his career was the " + teamsArray[rando] + ".";
                }

                else if (i == 6)
                {
                    window.location.reload();
                }

        }
e.target.reset();
      });
    
      title.addEventListener("mouseover", function() {
        if (title.style.color === "black") {
          
          title.style.color = "red";
        } else if (title.style.color === "red") {
          title.style.color = "blue";
          
        } else {
          title.style.color = "black";
        }

      });

    })//end of DOMcontentloaded that kicks the whole thing off