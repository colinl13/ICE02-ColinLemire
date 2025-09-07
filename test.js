// Problem 1
// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called. 

const Artist = {
        speak: function(){
            console.log("I am an artist")
        }
    };

const Painter = {
    speak: function(){
        console.log("I am an artist")
    },

    paint: function(){
        document.body.style.backgroundColor = getRandomColor()
    }
};


//Problem 2
// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)


for (let i = 0; i < 20; i++) {

        let newElement = document.createElement("div");
        newElement.style.float = "left";
        newElement.style.width = "10%";
        newElement.style.height = "25px";
        newElement.style.backgroundColor = getRandomColor();

        document.body.appendChild(newElement);

    }


// Helper function for problems 1 and 2
function getRandomColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }

    return color;
}


// Problem 3
// js
// create a for input field that does the following 
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank

// Creates a <h1> element containing the letter and appends it to the page
function handleInput() {

  const input = document.querySelector("#letter");
  const letter = input.value;
  
  // Does not allow for more than 1 letter input at a time
  if (letter) {
    const h1 = document.createElement("h1");
    h1.textContent = letter;
    document.body.appendChild(h1);
    // Deletes the inputted letter from the input field so it is blank
    input.value = "";
  }
}

// Waits for input 
window.addEventListener('load', function() {
  const input = document.querySelector("#letter");
  input.addEventListener('input', handleInput);
});

// Problem 4
// js
// make a button that, when clicked, creates a new
// button, and then deletes the original button. 
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure 
// that each button is different.

function makeButton() {

  const button = document.createElement("button");
  const randomText = ["Click me!", "Click here!", "Wanna see a trick?", "Clone Me!", "This is kinda like wack-a-mole", 
                      "Random Text", "This is a button", "What's your favorite color?", "Don't click me!", "button"];
  button.textContent = randomText[Math.floor(Math.random() * 10)];
  
 // Waits for button to be clicked
  button.addEventListener('click', function() {

    makeButton();
    this.remove();
    
  });
  
  document.body.appendChild(button);
}

// Loads the button when the page loads
window.addEventListener('load', function() {
  makeButton();
});
