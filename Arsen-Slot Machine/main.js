const num1 = document.getElementById('firstbox');
const num2 = document.getElementById('secondbox');
const num3 = document.getElementById('thirdbox');

const items = ["<img src=\"Icons/Club.png\" alt = \"Club\">", 
               "<img src=\"Icons/Diamond.png\" alt = \"Diamond\">", 
               "<img src=\"Icons/Spade.png\" alt = \"Spade\">", 
               "<img src=\"Icons/Heart.png\" alt = \"Heart\">",
               "<img src=\"Icons/Dollar.png\" alt = \"Dollar\">",
               "<img src=\"Icons/Surprise.png\" alt = \"Surprise\">",
               "<img src=\"Icons/Seven.png\" alt = \"Seven\">"
            ];

const spinbtn = document.getElementById('spin_button');
const result = document.getElementById('result');
const balance = document.getElementById('balance');

let currentbalance = 1000;
let currentbid = 50;
let spinAudio = document.getElementById("spin_audio"); 
let winAudio = document.getElementById("win_audio"); 
let clearSpin;

function clearspinfunc(){
    clearInterval(clearSpin);
};

function playSpinAudio() { 
    spinAudio.play(); 
} 
function playWinAudio() { 
    winAudio.play(); 
} 

function getRangeValue(value){
    document.getElementById('betcount').innerHTML = value;
    document.getElementById('rangeValue').innerHTML = value;
    currentbid = value; 
}

const randomItem = () => {
    const value = Math.floor(Math.random()*items.length);
    return items[value];
}
function spinInterval(){
    num1.innerHTML = randomItem();
    num2.innerHTML = randomItem();
    num3.innerHTML = randomItem();
}
function spin(){
   
    clearspinfunc();
    num1.innerHTML = randomItem();
    num2.innerHTML = randomItem();
    num3.innerHTML = randomItem();

    if(num1.innerHTML == num2.innerHTML && num2.innerHTML == num3.innerHTML){
        playWinAudio();
        result.innerHTML = "You Win";
        balance.innerHTML = currentbalance + (currentbid * 2)+ "$";
        return currentbalance = currentbalance + currentbid;
        
    }
    else{
        if(currentbalance - currentbid <= 0){
            result.innerHTML = "Please deposit!"
            balance.innerHTML = 0 + "$"
        }
        else{
            result.innerHTML = "You Lose";
            balance.innerHTML = currentbalance - currentbid + "$";
            return currentbalance = currentbalance - currentbid;
        }
    }
    
}

spinbtn.addEventListener('click', ()=> {
    playSpinAudio();
    
    clearSpin = setInterval(spinInterval,285);
    
});
