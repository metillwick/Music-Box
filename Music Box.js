// Container boxes
const divF = document.getElementsByClassName("box")[0];
const divG = document.getElementsByClassName("box")[1];
const divA = document.getElementsByClassName("box")[2];
const divB = document.getElementsByClassName("box")[3];
const divC = document.getElementsByClassName("box")[4];
const divD = document.getElementsByClassName("box")[5];
const divE = document.getElementsByClassName("box")[6];
// divs Array
const array = [divF, divG, divA, divB, divC, divD, divE];
// Play button

const button = document.querySelector("a");

// Sound files
const f = new Howl({
  src: ['sounds/F4.mp3']
});

const g = new Howl({
  src: ['sounds/G4.mp3']
});

const a = new Howl({
  src: ['sounds/A4.mp3']
});

const b = new Howl({
  src: ['sounds/B4.mp3']
});

const c = new Howl({
  src: ['sounds/C5.mp3']
});

const d = new Howl({
  src: ['sounds/D5.mp3']
});

const e = new Howl({
  src: ['sounds/E5.mp3']
});
// Sounds array
let record = [f,g,a,b,c,d,e];

// Animated text
let fText = document.getElementsByClassName("text")[0];
let gText = document.getElementsByClassName("text")[1];
let aText = document.getElementsByClassName("text")[2];
let bText = document.getElementsByClassName("text")[3];
let cText = document.getElementsByClassName("text")[4];
let dText = document.getElementsByClassName("text")[5];
let eText = document.getElementsByClassName("text")[6];

let storeSound;
let guessSound;
// when clicking div
for(i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function(){
    switch(this) {
      case array[0]:
        // play sound
        f.play();
        // flash text
        $(fText).animate({opacity: '1'}, 100);
        $(fText).animate({opacity: '0'}, 450);
        // store guessedSound
        guessSound = f;
        // check if guessSound matches playedSound
        isRight();
        break;
      case array[1]:
        g.play();
        $(gText).animate({opacity: '1'}, 100);
        $(gText).animate({opacity: '0'}, 450);
        guessSound = g;
        isRight();
        break;
      case array[2]:
        a.play();
        $(aText).animate({opacity: '1'}, 100);
        $(aText).animate({opacity: '0'}, 450);
        guessSound = a;
        isRight();
        break;
      case array[3]:
        b.play();
        $(bText).animate({opacity: '1'}, 100);
        $(bText).animate({opacity: '0'}, 450);
        guessSound = b;
        isRight();
        break;
      case array[4]:
        c.play();
        $(cText).animate({opacity: '1'}, 100);
        $(cText).animate({opacity: '0'}, 450);
        guessSound = c;
        isRight();
        break;
      case array[5]:
        d.play();
        $(dText).animate({opacity: '1'}, 100);
        $(dText).animate({opacity: '0'}, 450);
        guessSound = d;
        isRight();
        break;
      case array[6]:
        e.play();
        $(eText).animate({opacity: '1'}, 100);
        $(eText).animate({opacity: '0'}, 450);
        guessSound = e;
        isRight();
        break;
      default:
        console.log('Click a box');
        break;
    };
    // isRight();
  });
};



// Play random sound
button.addEventListener("click", function(){
  let guess = Math.floor(Math.random()*record.length);
  arr = new Howl({
    src: [record[guess]._src]
  })
  arr.play()
  storeSound = arr._src;
})

// Does picked sound match played sound?
function isRight(){
  if(storeSound === guessSound._src){
    alert("You guessed right!")
  } else {
    console.log(storeSound);
    console.log(guessSound._src);
  }
}
