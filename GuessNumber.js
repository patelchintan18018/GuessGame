var random_num = Math.floor(Math.random() * (20 - 1 + 1) + 1)
console.log(random_num);


var attempts = 20;
var count=0;
var highScore=20;

function guess() {

    count++;
    attempts--;
    var num = document.getElementById("number").value

    if (num > 0 && num <= 20) {
        if (num > random_num) {
            document.getElementById("display").innerHTML = `too big `;
            document.getElementById("attempts").innerHTML = `attempts left : ${attempts} `;
            document.getElementById("high-score").innerHTML = `High Score : ${highScore} `;

        }
        else if (num < random_num) {
            document.getElementById("display").innerHTML = `too small `;
            document.getElementById("attempts").innerHTML = `attempts left : ${attempts} `;
            document.getElementById("high-score").innerHTML = `High Score : ${highScore} `;
        }
        else if(num == random_num) {
            if (count < highScore) {
                highScore = count;
            }
            document.getElementById("display").innerHTML = `correct🎉 `;
            document.getElementById("attempts").innerHTML = `attempts left : ${attempts} `;
            document.getElementById("high-score").innerHTML = `High Score : ${highScore} `;
            document.getElementById("box").style.backgroundColor="green";
            document.getElementById("secretnumber").innerHTML=`${random_num} was the number`;
        }

    }
    else {
        document.getElementById("display").innerHTML = "Enter number between 1 to 20";
    }
    
}



/* reset condition  */
 function reset(){
    attempts=20;
    count=0;
    random_num = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    console.log(random_num);
    document.getElementById("number").value=''
    document.getElementById("display").innerHTML = `start game`;
    document.getElementById("attempts").innerHTML = `attempts lefts : ${attempts} `;
    document.getElementById("secretnumber").innerHTML=``;
    document.getElementById("box").style.backgroundColor="darkgoldenrod";
 }