
let playersArray = [];
let teamsArray = [];  
let rando = Math.floor(Math.random() * 100);
const guessesContainer = document.getElementById("wrong-guesses");
const outputMessage = document.getElementById("output message");
const playerGuessesContainer = document.getElementById("guess-my-team-form");
const title = document.getElementById("title");

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
    .then(resp => resp.json()) 
         .then(players => renderPlayer(players.data));
        })


    function renderPlayer(players)
    {const renderAPlayer = document.getElementById("rando-player");   
    players.forEach(guy => {
      playersArray.push(guy.first_name +' ' + guy.last_name)
      teamsArray.push(guy.team.city +' ' + guy.team.name)
    })
        const dude = document.createElement('div');  
        dude.innerHTML = playersArray[rando] 
        console.log(playersArray[rando])
        console.log(teamsArray[rando])
        renderAPlayer.appendChild(dude);    
   
    }


    let i = 0 //initialize counter for number of guesses
    playerGuessesContainer.addEventListener('submit', function(e) {
        e.preventDefault();
      
        
        // use the e.target object to get the value of the input element
        let playerGuess = e.target.querySelector('input').value;        //sets variable of playerGuess
        //I kmow that 'input' just pulls out the first element that is an input on the page

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
            {     //after 5 wrong guesses display this output message
                outputMessage.innerHTML = "The team " + playersArray[rando] + " played for most in his career was the " + teamsArray[rando] + ".";
                }

                else if (i == 6) //reload the page on the 6th guess
                {window.location.reload();}

        }
e.target.reset(); //reset input field
      });


      //quick event listener with built in function to change title from black to red to blue and back for eveery mouseover
      title.addEventListener("mouseover", function() {
        if (title.style.color === "black") {
          
          title.style.color = "red";
        } else if (title.style.color === "red") {
          title.style.color = "blue";
          
        } else {
          title.style.color = "black";
        }

      });

    //end of DOMcontentloaded that kicks the whole thing off