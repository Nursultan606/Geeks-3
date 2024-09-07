const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

const regExp =/[a-zA-Z0-9@]gmail.com/
// const regExp =/^\+996 [2579] \d{2} \d{2} \d{2}$/

gmailButton.onclick = ()=> {
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = "Ok"
        gmailSpan.style.color = "green"
    }else {
        gmailSpan.innerHTML = "Not Ok"
        gmailSpan.style.color = "red"
    }
}
const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let position = 0;

function moveRight() {
    if (position<parentBlock.offsetWidth-childBlock.offsetWidth){
        position +=2;
        childBlock.style.left = `${position}px`;
        requestAnimationFrame(moveRight);
    }
}
moveRight()

