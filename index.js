let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 100)

btn.addEventListener('click', function() {
    let input = document.getElementById('userinput').value;

    if (input == number) {
        output.innerHtml = `You guessed right, your number was ${number}`;
    } 
    else if (input < number && input>1) {
        output.innerHtml = "You guessed too low!";
    }
    else if (input > number && input<100) {
        output.innerHtml = "You guessed too high!";
    } 
    else{
        output.innerHTML= "Lowe, it has to be between 1 and 100";
    }

});

