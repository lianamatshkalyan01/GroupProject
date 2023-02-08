//Create Button for Spin
let name_of_button = document.createTextNode("SPIN")
newDiv = document.createElement("div")
spinButton = document.createElement("button")
spinButton.appendChild(name_of_button)
newDiv.append(spinButton)
spinButton.className = "spin"
let currentDiv = document.querySelector(".container")
currentDiv.appendChild(newDiv)

//Create Div for Items
let parentDiv = document.querySelector(".item")
for(let i=0; i<3; i++){
    let childDiv = document.createElement("div");
    childDiv.className = "item2";
    parentDiv.appendChild(childDiv);
}

//Create Input for the Result
resultDiv = document.createElement("div")
resultInput = document.createElement("input")
resultInput.type = "text"
resultInput.value = "Your result"
resultInput.className = "result"
resultDiv.appendChild(resultInput)
let result = document.querySelector(".res")
result.appendChild(resultDiv)

//Create div for the cash
CashDiv = document.createElement("div")
CashDiv.className = "amount"
name_of_cash = document.createTextNode("Cash")
sign_of_cash = document.createTextNode("$")
value_of_cash = document.createTextNode("")
cashP = document.createElement("p")
cashP.appendChild(name_of_cash)
cashP.className="cashtxt"
cashSign = document.createElement("p")
cashSign.appendChild(sign_of_cash)
cashSign.className="signtxt"
cashValue = document.createElement("input")
cashValue.type = "number"
cashValue.value=100
cashValue.appendChild(value_of_cash)
cashValue.className = "valuetxt"
CashDiv.append(cashP, cashSign, cashValue)
let currentDiv1 = document.querySelector(".cash")
currentDiv1.appendChild(CashDiv)

//create images
let slot = document.getElementsByClassName("item2")
let images =  ["./images/images13.jpg", "images./image3.png", "./images/image4.jpg", "./images/image5.jpg", "./images/image14.jpg", "./images/image9.png", "./images/image11.jfif", "./images/image12.png" ]
images.forEach(function(src){
    let newImg = document.createElement("img");
    newImg.src = src;
    newImg.style.display = "none";
    CashDiv.appendChild(newImg)
})
//function for clicking on the button
spinButton.addEventListener("click", function play(){
    let randomIndex1 = Math.floor(Math.random()*images.length)
    let randomIndex2 = Math.floor(Math.random()*images.length)
    let randomIndex3 = Math.floor(Math.random()*images.length)
    slot[0].innerHTML = `<img src="${images[randomIndex1]}" class="icon">`
    slot[1].innerHTML = `<img src="${images[randomIndex2]}" class="icon">`
    slot[2].innerHTML = `<img src="${images[randomIndex3]}" class="icon">`
    let intervalId = setInterval(() => {
        randomIndex1 = Math.floor(Math.random() * images.length);
        randomIndex2 = Math.floor(Math.random() * images.length);
        randomIndex3 = Math.floor(Math.random() * images.length);
        slot[0].innerHTML = `<img src="${images[randomIndex1]}" class="icon">`;
        slot[1].innerHTML = `<img src="${images[randomIndex2]}" class="icon">`;
        slot[2].innerHTML = `<img src="${images[randomIndex3]}" class="icon">`;
    }, 500);
    
    setTimeout(() => {
        clearInterval(intervalId);
        if (slot[0].innerHTML === slot[1].innerHTML && slot[1].innerHTML === slot[2].innerHTML) {
            resultInput.value = "You won!";
            cashValue.value = cashValue.value += 10;
        } else {
            resultInput.value = "You lose!";
            cashValue.value = cashValue.value -= 10;
            if (cashValue.value <= 0) {
                cashValue.value = 0;
                alert("You don't have enough cash");
            }
        }
    }, 3000);
});




