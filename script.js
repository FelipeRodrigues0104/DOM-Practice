function addGloriousText(){
const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);
}

function addPText(){
    const container = document.querySelector("#container");
    const redText = document.createElement("p");
    redText.classList.add("redText");
    redText.textContent = "Hey, I am Red!";
    redText.style.color="red";
    container.appendChild(redText);
}

function addH3Blue(){
    const container = document.querySelector("#container");
    const blueText = document.createElement("h3");
    blueText.classList.add("blueText");
    blueText.textContent = "I’m a blue h3!";
    blueText.style.color="blue";
    container.appendChild(blueText);
}

function addNewDiv(){
    const container = document.querySelector("#container");
    const newDiv = document.createElement("div");
    newDiv.id = "newDiv";
    newDiv.style.border = "5px solid black";
    newDiv.style.backgroundColor = "pink"

    const h1Text = document.createElement("h1");
    h1Text.classList.add("h1Text");
    h1Text.textContent= "im in a div too!";
    
    const pText = document.createElement("p");
    pText.classList.add("pText");
    pText.textContent = "ME TOO!";

    newDiv.appendChild(h1Text);
    newDiv.appendChild(pText);
    container.appendChild(newDiv);
}

function buttonCall(){
    addPText();
    addGloriousText(); 
    addH3Blue();   
    addNewDiv();
}
