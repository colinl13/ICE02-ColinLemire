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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

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
